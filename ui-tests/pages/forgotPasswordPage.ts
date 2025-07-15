import { expect } from '@playwright/test';
import { BasePage } from './basePage.ts';
import { BASE_UI_URL } from './config/environment.ts';
import { logDecorator } from '../utils/decorators.ts';

export class ForgotPasswordPage extends BasePage {
  public header = this.page.locator('.forgot-password-user');
  public emailInput = this.page.locator('#email');
  public signInLink = this.page.locator('.login-link');
  public forgotPasswordButton = this.page.getByTestId('submit-forgot-password');
  public successNotification = this.page.locator('.Toastify__toast-body');

  uniqeElement = this.header;

  @logDecorator
  async open() {
    await this.page.goto(`${BASE_UI_URL}/forgot-password/user`);
  }

  @logDecorator
  async waitForOpened() {
    await expect(this.uniqeElement).toBeVisible();
  }

  @logDecorator
  async forgotPassword(email: string) {
    await this.emailInput.fill(email);
    await this.forgotPasswordButton.click();
  }
}
