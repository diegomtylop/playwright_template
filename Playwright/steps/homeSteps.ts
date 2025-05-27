import { expect } from "@playwright/test";
import { Given, When, Then } from "./fixtures";

//Preconditions
Given("I am on the home page {string}", async ({ homePage }, url: string) => {
    await homePage.navigate(url);
});

//Actions
When("I perform an action", async ({ homePage }, term: string) => {
    await homePage.performAction();
});

Then("I expect an outcome", async ({ homePage }) => {
    await homePage.validate();
});


