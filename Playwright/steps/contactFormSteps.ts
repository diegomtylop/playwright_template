import { expect } from "@playwright/test";
import { Given, When, Then } from "./fixtures";

Given("the user navigate to contact form page", async ({ contactPage }) => {
    await contactPage.navigateToContactform();
});

When("the user complete the contact form", async ({ contactPage }) => {
    await contactPage.completeContactform();
});

Then("the form is completed", async ({ contactPage }) => {
    await contactPage.validateSubmitButton()
});
