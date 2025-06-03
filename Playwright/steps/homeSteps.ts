import { expect } from "@playwright/test";
import { Given, When, Then } from "./fixtures";
import { HomePage } from "@pages/homePage";

//Preconditions
Given("the user is on the home page", async ({ homePage }) => {
    await homePage.navigate();
});

//Actions
When("I perform an action", async ({ homePage }, term: string) => {
    await homePage.performAction();
});

When('the user hover on {string} menu', async ({ homePage }, option: string) => {
    await homePage.hoverNavigateOption(option);
});

When('the user clicks on {string} menu', async ({ homePage }, option: string) => {
    await homePage.clickNavigateOption(option);
});

When('the user clicks on {string} on menu {string}', async ({homePage}, option: string, menu: string) => {
   await homePage.clickSubMenuOption(menu,option);
});

When('the user clicks on {string} footer', async ({homePage}, option: string) => {
  await homePage.clickFooterOption(option);
});

Then("I expect an outcome", async ({ homePage }) => {
    await homePage.validate();
});

Then('the menu {string} expands', async ({homePage}, menu: string) => {
    await homePage.validateOpenMenu(menu);
});

Then('the {string} page is displayed', async ({homePage}, pageName: string) => {
    await homePage.validatePageUrl(pageName);
});

