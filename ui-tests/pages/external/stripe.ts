import { BasePage } from '../basePage.ts';
import {
  BILLING_COUNTRY,
  BILLING_NAME,
  CARD_CVC,
  CARD_EXPIRE,
  PAYMENT_CARD,
  PAYMENT_EMAIL,
} from '../config/environment.ts';

export class StripePage extends BasePage {
  public emailInput = this.page.locator('#email');
  public cardNumberInput = this.page.locator('#cardNumber');
  public cardExpiryInput = this.page.locator('#cardExpiry');
  public cardCvcInput = this.page.locator('#cardCvc');
  public billingNameInput = this.page.locator('#billingName');
  public billingCountrySelect = this.page.locator('#billingCountry');
  public sumbitPaymentButton = this.page.locator('.SubmitButton-IconContainer');

  uniqeElement = this.sumbitPaymentButton;

  async actionPay() {
    await this.emailInput.fill(PAYMENT_EMAIL);
    await this.cardNumberInput.fill(PAYMENT_CARD);
    await this.cardExpiryInput.fill(CARD_EXPIRE);
    await this.cardCvcInput.fill(CARD_CVC);
    await this.billingNameInput.fill(BILLING_NAME);
    await this.billingCountrySelect.selectOption(BILLING_COUNTRY);
    await this.sumbitPaymentButton.click();
  }
}
