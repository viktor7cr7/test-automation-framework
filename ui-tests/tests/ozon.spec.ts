import { expect, test } from '@playwright/test';
import { chromium } from '@playwright/test';

test.use({ baseURL: '', permissions: [] });

test.only('Добавление товара в любимое', async () => {
  const browser = await chromium.launch({
    headless: false, // видимый браузер
    args: ['--disable-blink-features=AutomationControlled'],
  });

  const context = await browser.newContext();

  const page = await context.newPage();

  await page.route(/png/, async (route) => await route.abort());

  await page.goto('https://www.ozon.ru/');

  //  const cookie = page.locator("[data-widget='cookieBubble']");

  //  await expect(cookie).toBeVisible({ timeout: 10000 });

  const btnCatalog = page.locator('[data-widget="catalogMenu"] button');

  await btnCatalog.click();

  const names: any = [];
  /*   await page.waitForEvent('response', async (response) => {
    if (response.url().includes('jpg')) {
      names.push(await (await response.url()));
      return true;
    }
    return false;
  }); */

  await page.waitForEvent('request', async (request) => {
    if (request.url().includes('getSearchTapTags')) {
      console.log(request.postDataJSON());
      names.push(await await request.url());
      return true;
    }
    return false;
  });
  console.log(names);
});
