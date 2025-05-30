import { expect, type Locator, type Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { CookieOverlay } from "./subpages/CookieOverlay";
import { NavigateMenu } from "./subpages/navigateMenu";

export class HomePage extends BasePage {
    
    readonly cookieOverlay: CookieOverlay;

    readonly navigateMenu: NavigateMenu;

    constructor(page: Page) {
        super(page);
        this.cookieOverlay = new CookieOverlay(page);
        this.navigateMenu = new NavigateMenu();
    }

    async hoverNavigateOption(option: string){
        const selector = this.navigateMenu.getMenuItem(option);
        if (!selector) throw new Error(`The menu option '${option}' does not exist.`);
        await this.page.locator(selector).hover();
    }

    async clickNavigateOption(option: string){
        const selector = this.navigateMenu.getMenuItem(option);
        if (!selector) throw new Error(`The menu option '${option}' does not exist.`);
        await this.page.locator(selector).click();
    }

    async navigate() {
        await this.page.goto("/");
        await this.cookieOverlay.acceptCookies();
        await this.page.title();
    }

    async performAction() {
        console.log("Performing action");
    }

    async saveSession(filePath: string = "session.json") {
        await this.page.context().storageState({ path: filePath });
    }

    async validate() {
        await expect(1).toBe(1);
    }

    async validateOpenMenu(menu:string){

        const firstItem = this.navigateMenu.getFirstSubMenuItem(menu);
        if (!firstItem) throw new Error(`The menu option '${menu}' does not exist.`);
        await expect(this.page.locator(firstItem)).toBeVisible();
    }

    async clickFooterOption(option:string) {
        const footerItem = this.navigateMenu.getFooterItem(option);
        if (!footerItem) throw new Error(`The footer option '${option}' does not exist.`);
        await this.page.locator(footerItem).click();
    }

    async clickSubMenuOption(menu:string , option:string) {
        const subItem = this.navigateMenu.getSubMenuItem(menu,option);
        if (!subItem) throw new Error(`The submenu option '${option}' does not exist.`);
        await this.page.locator(subItem).click();
    }

    async validatePageUrl(pageName:string){
        const pageUrl = this.navigateMenu.getPageUrl(pageName);
        if (!pageUrl) throw new Error(`The Page option '${pageName}' does not exist.`);
        await this.page.waitForURL(pageUrl);
    }
}
