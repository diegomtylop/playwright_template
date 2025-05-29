import { test as base, createBdd } from 'playwright-bdd';
import { HomePage } from '@pages/homePage';
import  fs  from 'fs';
import { SearchPage } from '@pages/searchPage';

export type TestData = {
  homePage: HomePage;
  searchPage: SearchPage;
}

export const test = base.extend<TestData>({
  homePage: async ({ browser }, use) => {

    let context;
    
    if (fs.existsSync('session.json')) {
      context = await browser.newContext({ storageState: 'session.json' });
    } else {
      context = await browser.newContext();
    }
    
    const page = await context.newPage(); 

    await use(new HomePage(page));
  },
      searchPage: async ({ page }, use) => {
        await use(new SearchPage(page));
    },
});
export const { Given, When, Then } = createBdd(test);
