import { expect, Locator, Page } from '@playwright/test';
import { BASE_UI_URL } from './config/environment.ts';
import { urlAssertion } from '../utils/urlDecode.ts';
import { allure } from 'allure-playwright';

export abstract class BasePage {
  abstract uniqeElement: Locator;
  constructor(public page: Page) {
    this.page = page;
  }

  async waitForOpened() {
    return allure.step(
      `Ожидаем открытие страницы: ${this.constructor.name}`,
      async () => await expect(this.uniqeElement).toBeVisible({ timeout: 20000 })
    );
  }

  async interceptRequest<T extends unknown[]>(fn: (...args: T) => Promise<void>, endpoint: string, ...args: T) {
    return await allure.step(`Перехватываем запрос с эндпоинтом = ${endpoint}`, async () => {
      return (await Promise.all([
        this.page.waitForRequest((req) => urlAssertion(req.url(), BASE_UI_URL + endpoint)),
        fn(...args),
      ])) as unknown as void;
    });
  }
}
