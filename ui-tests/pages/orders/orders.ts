import { logDecorator, logStepWithReturn } from '../../utils/decorators.ts';
import { BasePage } from '../basePage.ts';
import { BASE_UI_URL } from '../config/environment.ts';

export class OrdersPage extends BasePage {
  public searchInput = this.page.getByTestId('search-id');
  public orderItem = this.page.getByTestId('order-item');
  public orderId = this.page.getByTestId('order-id');
  public sortPriceSelect = this.page.getByTestId('sort-price');
  public sortDateSelect = this.page.getByTestId('sort-date');
  public sortStatusSelect = this.page.getByTestId('sort-status');
  public orderItemPrice = this.page.getByTestId('total-price-order');
  public orderDate = this.page.getByTestId('create-order');

  uniqeElement = this.searchInput;

  @logDecorator
  async openPage() {
    await this.page.goto(`${BASE_UI_URL}/dashboard/user/orders`);
  }

  @logDecorator
  async selectSortByPrice(value: 'asc' | 'desc') {
    await this.sortPriceSelect.selectOption(value);
  }

  @logDecorator
  async selectSortByDate(value: 'asc' | 'desc') {
    await this.sortDateSelect.selectOption(value);
  }

  @logDecorator
  async selectSortByStatus(value: 'paid' | 'unpaid') {
    await this.sortStatusSelect.selectOption(value);
  }

  @logStepWithReturn
  async getOrderItem() {
    return this.orderItem;
  }

  @logStepWithReturn
  async getOrderDate() {
    return this.orderDate;
  }

  @logStepWithReturn
  async getOrderItemPrice() {
    return this.orderItemPrice;
  }

  @logDecorator
  async searchById(id: string) {
    await this.searchInput.fill(id);
  }
}
