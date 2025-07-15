import { logDecorator } from '../utils/decorators.ts';
import { BasePage } from './basePage.ts';

export class DashboardPage extends BasePage {
  public cart = this.page.getByTestId('cart');

  uniqeElement = this.cart;

  @logDecorator
  async openCart() {
    await this.cart.click();
  }
}
