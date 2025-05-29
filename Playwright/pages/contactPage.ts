import { expect, type Locator, type Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { CookieOverlay } from "./subpages/CookieOverlay";

export class ContactPage extends BasePage {
    readonly cookieOverlay: CookieOverlay;
    readonly contactButton: Locator;
    readonly contactHeader: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly phoneInput: Locator;
    readonly jobTitleInput: Locator;
    readonly companyInput: Locator;
    readonly countrySelect: Locator;
    readonly messageTextarea: Locator;
    readonly subscribeYesRadio: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        super(page);
        this.cookieOverlay = new CookieOverlay(page);
        this.contactButton = this.page
            .getByRole("link", { name: "Contact" })
            .first();
        this.contactHeader = this.page.locator("h1", {
            hasText: "Get in touch with us.",
        });
        this.firstNameInput = page.getByLabel("First Name");
        this.lastNameInput = page.getByLabel("Last Name");
        this.emailInput = page.getByLabel("Work Email");
        this.phoneInput = page.getByLabel("Phone");
        this.jobTitleInput = page.getByLabel("Job Title");
        this.companyInput = page.getByLabel("Company").first();
        this.countrySelect = page.getByLabel("Country");
        this.messageTextarea = page.getByLabel(
            "How can we help your business?"
        );
        this.subscribeYesRadio = page.getByLabel("Yes, subscribe me.");
        this.submitButton = page.locator('input[type="submit"]');
    }

    async navigateToContactform() {
        await this.page.goto("/");
        await this.cookieOverlay.acceptCookies();
        await this.page.title();
        await this.contactButton.click();
        await this.contactHeader.isVisible();
    }

    async completeContactform() {
        await expect(this.firstNameInput).toBeVisible();
        await this.firstNameInput.fill("John");
        await this.lastNameInput.fill("Doe");
        await this.emailInput.fill("john.doe@example.com");
        await this.phoneInput.fill("+1234567890");
        await this.jobTitleInput.fill("Software Engineer");
        await this.companyInput.fill("Tech Corp");
        await this.countrySelect.selectOption("Colombia");
        await this.messageTextarea.fill(
            "I am interested in learning more about your services."
        );
        await this.subscribeYesRadio.check();
    }

    async validateSubmitButton() {
        await expect(this.submitButton).toBeVisible();
    }
}
