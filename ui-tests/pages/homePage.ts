import { Locator } from '@playwright/test';
import { BasePage } from './basePage.ts';
import { BASE_UI_URL } from './config/environment.ts';
import { logDecorator } from '../utils/decorators.ts';

export class HomePage extends BasePage {
  public uniqeElement!: Locator;

  readonly shopHeader = this.page.locator('[data-id="market-header"]');
  readonly emailInput = this.page.getByTestId('email-shop-input');
  readonly passwordInput = this.page.getByTestId('password-shop-input');
  readonly loginButton = this.page.getByTestId('market-signin');
  readonly registerButton = this.page.getByTestId('market-register');
  readonly forgotPasswordButtn = this.page.getByTestId('market-forgot-password');

  @logDecorator
  async openHome() {
    await this.page.goto(BASE_UI_URL);
  }

  @logDecorator
  async login({ email, password }: { email: string; password: string }) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
