import { expect } from "@playwright/test";
import { Given, When, Then } from "./fixtures";

Given("the user navigate to contact form page", async ({ contactPage }) => {
    await contactPage.navigateToContactform();
});

When("the user complete the contact form", async ({ contactPage }) => {
    await contactPage.completeContactform();
});

Then("the form is completed", async ({ contactPage }) => {
    await contactPage.validateSubmitButton();
});

When(
    "the user tries to submit the form without filling any fields",
    async ({ contactPage }) => {
        await contactPage.submitFormWithoutFillingFields();
    }
);

Then(
    "the error messages are displayed for each required field",
    async ({ contactPage }) => {
        await contactPage.validateErrorMessages();
    }
);
