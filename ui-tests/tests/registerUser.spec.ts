import { expect, Page, test } from '@playwright/test';

test('Регистрация пользователя', async ({ page }) => {
  const registerData = {
    email: 'test123325@gmail.com',
    password: '845zG!TyaFvn2tj',
  };
  let secondPage: Page = page;
  await page.goto('https://indeepa.com/');

  page.on('popup', (pageSecond) => {
    console.log(`Перехватили страницу = ${pageSecond.url()}`);
    secondPage = pageSecond;
  });


  const registerButton = page.getByRole('link', { name: 'зарегистрироваться' });
  await registerButton.click();
  console.log(' PAGE ' + secondPage.url());

  //  await secondPage.waitForURL(/signup/, { waitUntil: 'domcontentloaded' });

  const emailInput = secondPage.locator('#mat-input-0');
  const passwordInput = secondPage.locator('input[formcontrolname=pass]');
  const checkboxAccess = secondPage.locator('#mat-checkbox-1-input');
  const mainRegisterButton = secondPage.getByRole('button').filter({ hasText: 'Зарегистрироваться' });

  await emailInput.click({ force: true });
  await emailInput.fill(registerData.email, { force: true });
  await passwordInput.fill(registerData.password);
  await checkboxAccess.check({ force: true });
  await mainRegisterButton.click();

  //  await expect(page).toHaveURL(/https:\/\/supplier.indeepa.com\/#\/workspaces/);
});
