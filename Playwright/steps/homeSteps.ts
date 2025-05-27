import { expect } from "@playwright/test";
import { Given, When, Then } from "./fixtures";

//Preconditions
Given("I am on the home page", async ({ homePage }) => {
    await homePage.navigate();
});

//Actions
When("I perform an action", async ({ homePage }, term: string) => {
    await homePage.performAction();
});

Then("I expect an outcome", async ({ homePage }) => {
    await homePage.validate();
});


