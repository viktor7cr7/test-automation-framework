import { expect, Page } from '@playwright/test';
import { HomePage } from '../pages/homePage.ts';
import { USER_EMAIL_LOGIN, USER_PASSWORD } from '../../api-tests/config/environment.ts';
import { BuyProductsPage } from '../pages/buyProducts/buyProducts.ts';
import { logDecorator } from '../utils/decorators.ts';

export class LoginService {
  private homePage: HomePage;
  private buyProducts: BuyProductsPage;
  constructor(page: Page) {
    this.homePage = new HomePage(page);
    this.buyProducts = new BuyProductsPage(page);
  }

  @logDecorator
  async login(data?: { email: string; password: string }) {
    await this.homePage.openHome();
    await this.homePage.login(data ?? { email: USER_EMAIL_LOGIN, password: USER_PASSWORD });
    await this.buyProducts.waitForOpened();
    await expect(this.buyProducts.successNotification).toHaveText('login successful');
  }
}
