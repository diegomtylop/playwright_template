import { test as base, createBdd } from 'playwright-bdd';
import { HomePage } from '@pages/homePage';
import  fs  from 'fs';

export type TestData = {
  homePage: HomePage
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
  }
});
export const { Given, When, Then } = createBdd(test);
