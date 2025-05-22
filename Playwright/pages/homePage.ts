import { expect, type Locator, type Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { CookieOverlay } from "./subpages/CookieOverlay";

export class HomePage extends BasePage {
    readonly cookieOverlay: CookieOverlay;
    readonly title: Locator;

    constructor(page: Page) {
        super(page);
        this.cookieOverlay = new CookieOverlay(page);
        this.title = page.locator("div");
    }

    async navigate() {
        await this.page.goto("/");
        await this.title.first().waitFor();
    }

    async performAction() {
        console.log("Performing action");
    }

    async validate() {
        await expect(1).toBe(1);
    }
}
