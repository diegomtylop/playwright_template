import { expect, type Locator, type Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { CookieOverlay } from "./subpages/CookieOverlay";

export class HomePage extends BasePage {
    readonly cookieOverlay: CookieOverlay;

    constructor(page: Page) {
        super(page);
        this.cookieOverlay = new CookieOverlay(page);
    }

    async navigate() {
        await this.page.goto("/");
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
}
