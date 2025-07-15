import { expect, Page } from '@playwright/test';
import { HomePage } from '../pages/homePage.ts';
import { RegisterPage } from '../pages/registerPage.ts';
import { USER_EMAIL_REGISTER, USER_NAME, USER_PASSWORD } from '../../api-tests/config/environment.ts';
import { LoginPage } from '../pages/loginPage.ts';
import { logDecorator } from '../utils/decorators.ts';

export class RegisterService {
  private homePage: HomePage;
  private registerPage: RegisterPage;
  private loginPage: LoginPage;
  constructor(page: Page) {
    this.homePage = new HomePage(page);
    this.registerPage = new RegisterPage(page);
    this.loginPage = new LoginPage(page);
  }
  

  @logDecorator
  async register(data?: { name: string; email: string; password: string }) {
    await this.homePage.openHome();
    await this.homePage.registerButton.click();
    await this.registerPage.register(data ?? { name: USER_NAME, email: USER_EMAIL_REGISTER, password: USER_PASSWORD });
    await this.loginPage.waitForOpened();
    await expect(this.loginPage.successNotification).toHaveText('Registartion successful');
  }
}
