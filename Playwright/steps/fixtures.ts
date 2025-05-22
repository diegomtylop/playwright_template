import { test as base, createBdd } from 'playwright-bdd';
import { HomePage } from '@pages/homePage';

export type TestData = {
  homePage: HomePage
}

export const test = base.extend<TestData>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  }
});
export const { Given, When, Then } = createBdd(test);
