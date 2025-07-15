import { USER_EMAIL_LOGIN, USER_PASSWORD } from '../../api-tests/config/environment.ts';
import { dataLogin } from '../data/dataDriven.ts';
import { test, expect } from '../fixtures/pages-fixtures.ts';
import { LocatorKeysHomePage } from '../types/dataDriven.ts';

test.describe('Авторизация пользователя с валидными данными', () => {
  test('Авторизация с валидными данными', async ({ homePage, buyProductsPage }) => {
    await homePage.openHome();
    await homePage.login({ email: USER_EMAIL_LOGIN, password: USER_PASSWORD });
    await buyProductsPage.waitForOpened();
  });
});

test.describe('Авторизация пользователя с невалидными данными', () => {
  dataLogin.forEach(({ name, email, password, message, keyLocator, validateInput, validateErrMessage }) => {
    test(name, async ({ homePage }) => {
      await homePage.openHome();
      await homePage.login({ email, password });
      const locator = homePage[keyLocator as LocatorKeysHomePage];
      expect(await validateInput(locator)).toBe(false);
      expect(await validateErrMessage(locator)).toBe(message);
    });
  });
});
