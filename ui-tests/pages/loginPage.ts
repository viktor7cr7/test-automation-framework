import { Locator } from '@playwright/test';
import { BasePage } from './basePage.ts';

export class LoginPage extends BasePage {
  public header = this.page.locator('.user-login-header');
  public loginInput = this.page.locator('#email');
  public passwordInput = this.page.locator('#password');
  public loginButton = this.page.getByRole('button', { name: 'submit' });
  public registerButton = this.page.getByRole('link', { name: 'Регистрация' });
  public successNotification = this.page.locator('.Toastify__toast-body');
  [key: string]: Locator | unknown;

  uniqeElement = this.header;
}
