import { logDecorator, logStepWithReturn } from '../../../utils/decorators.ts';
import { ModalPage } from '../modalPage.ts';

export class CartModal extends ModalPage {
  public header = this.page.getByTestId('header-cart');
  public closeButton = this.page.getByTestId('close-modal-cart');
  public cartItem = this.page.getByTestId('cart-item');
  public totalPrice = this.page.getByTestId('total-price');
  public containerItem = this.page.getByTestId('state-cart');
  public productName = this.containerItem.getByTestId('product-name-cart');
  public productPrice = this.containerItem.locator('.subtotal');
  public productQuantity = this.containerItem.getByTestId('quantity-value');
  public paymentMethodSelect = this.page.getByTestId('payment-method-cart');
  public buyButton = this.page.getByTestId('buy-product-cart');
  public changeQuantityBtn = this.page.getByTestId('update-quantity');
  public inputQuantity = this.page.getByTestId('input-quantity');
  public saveChangeQuantityBtn = this.page.getByTestId('save-change-quantity');
  public deleteProductBtn = this.page.getByTestId('delete-product')

  uniqeElement = this.header;

  @logStepWithReturn
  async getTotalPrice() {
    return this.totalPrice;
  }

  @logDecorator
  async updateQuantity(value: number, position: number) {
    await this.changeQuantityBtn.nth(position).click();
    await this.inputQuantity.nth(position).fill(String(value));
    await this.saveChangeQuantityBtn.click();
  }

  @logDecorator
  async deleteProduct(position: number) {
    await this.deleteProductBtn.nth(position).click()
  }

  @logStepWithReturn
  async getTextContainer() {
    return await this.containerItem.textContent();
  }

  @logStepWithReturn
  async getPriceText() {
    return await this.totalPrice.textContent();
  }

  @logStepWithReturn
  async getPaymentMethodValue() {
    return await this.paymentMethodSelect.inputValue();
  }

  @logStepWithReturn
  async getProductNameAt(position: number) {
    return this.productName.nth(position).textContent();
  }

  @logStepWithReturn
  async getProductPriceAt(position: number) {
    return this.productPrice.nth(position).textContent();
  }

  @logStepWithReturn
  async getProductQuantityAt(position: number) {
    return this.productQuantity.nth(position).textContent();
  }

  @logStepWithReturn
  async getProductsName(position: number[]) {
    const elements = [];
    const task = position.map(async (elem, index) => await this.productName.nth(index).textContent());
    const result = await Promise.all(task);
    elements.push(...result);
    return elements;
  }

  @logDecorator
  async selectPaymentMethod(method: 'Balance' | 'Credit Card') {
    await this.paymentMethodSelect.selectOption(method);
  }

  @logDecorator
  async clickBuyProductButton() {
    await this.buyButton.click();
  }

  @logDecorator
  async closeCart() {
    await this.closeButton.click();
  }
}
