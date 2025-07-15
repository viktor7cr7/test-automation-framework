import { clearPrice } from '../../utils/clearPrice.ts';
import { logDecorator, logStepWithReturn } from '../../utils/decorators.ts';
import { BasePage } from '../basePage.ts';

export class BuyProductsPage extends BasePage {
  public searchCountInfo = this.page.getByTestId('search-info');
  public productItem = this.page.locator('.product-containter');
  public successNotification = this.page.locator('.Toastify__toast-body');
  public paginationPrevBtn = this.page.locator('.prev-btn');
  public paginationNextBtn = this.page.getByRole('button', { name: 'next' }).first();
  public paginationBtnContainer = this.page.locator('.btn-container');
  public pagesNumeric = this.paginationBtnContainer.locator('.page-btn');
  public buyProductButton = this.productItem.getByTestId('buy-product');
  public productName = this.productItem.getByTestId('product-name');
  public productPrice = this.productItem.getByTestId('product-price');
  public productAddToCart = this.productItem.locator('.add-to-cart');

  public uniqeElement = this.searchCountInfo;

  @logDecorator
  async clickNextPage() {
    await this.paginationNextBtn.click();
  }

  @logDecorator
  async clickPrevPage() {
    await this.paginationPrevBtn.click();
  }

  @logDecorator
  async navigatePagination(index: number) {
    await this.pagesNumeric.nth(index - 1).click();
  }

  @logStepWithReturn
  async getNameText() {
    return await this.pagesNumeric.textContent();
  }

  @logDecorator
  async clickBuyProductButton(position: number) {
    await this.buyProductButton.nth(position).click();
  }

  @logStepWithReturn
  async getProductName(position: number) {
    return this.productName.nth(position).textContent();
  }

  @logStepWithReturn
  async getProductsName(position: number[]) {
    const elements = [];
    const task = position.map(async (pos) => await this.productName.nth(pos - 1).textContent());
    const result = await Promise.all(task);
    elements.push(...result);
    return elements;
  }

  @logStepWithReturn
  async getProductPrice(position: number) {
    return this.productPrice.nth(position);
  }

  @logStepWithReturn
  async getProductsPrice(position: number[]) {
    const elements = [];
    const task = position.map(async (pos) => await this.productPrice.nth(pos - 1).textContent());
    const result = await Promise.all(task);
    const clear = result.map(async (element) => await clearPrice(element as string));
    elements.push(...(await Promise.all(clear)));
    return elements;
  }

  @logDecorator
  async addProductToCartAt(position: number[]) {
    const task = position.map(async (pos) => await this.productAddToCart.nth(pos - 1).click());
    await Promise.all(task);
  }
}
