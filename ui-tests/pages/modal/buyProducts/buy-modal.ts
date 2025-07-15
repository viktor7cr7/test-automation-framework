import { expect } from '@playwright/test';
import { ModalPage } from '../modalPage.ts';
import { logDecorator, logStepWithReturn } from '../../../utils/decorators.ts';

export class BuyModal extends ModalPage {
  public header = this.page.getByTestId('modal-buy-product');
  public productName = this.page.getByTestId('product-name-modal-buy');
  public quantityInput = this.page.locator("[name='quantity']");
  public totalPrice = this.page.getByTestId('product-price-modal-buy');
  public paymentMethodSelect = this.page.getByTestId('select-payment-method');
  public buyButton = this.page.getByTestId('product-modal-buy');

  public uniqeElement = this.header;

  @logDecorator
  async setQuantity(quantity: string, position: number) {
    await this.quantityInput.nth(position).fill(quantity);
  }

  @logDecorator
  async selectPaymentMethod(method: 'Balance' | 'Credit Card', position: number) {
    await this.paymentMethodSelect.nth(position).selectOption(method);
  }

  @logStepWithReturn
  async getProductPrice(position: number) {
    return this.totalPrice.nth(position);
  }

  @logDecorator
  async clickBuyProductButton(position: number) {
    await this.buyButton.nth(position).click();
  }

  @logStepWithReturn
  async getProductName(position: number) {
    return this.productName.nth(position);
  }

  @logDecorator
  async waitForOpenedAt(position: number) {
    await expect(this.uniqeElement.nth(position)).toBeVisible();
  }
}
