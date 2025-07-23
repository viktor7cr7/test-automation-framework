import { Page } from '@playwright/test';
import { IValidateUIData } from '../../../types/validateDisplay.ts';
import { OrdersPage } from '../../../ui-tests/pages/orders/orders.ts';
import { clearPrice } from '../../../ui-tests/utils/clearPrice.ts';

export class ValidateOrders implements IValidateUIData {
  private ordersPage: OrdersPage;

  constructor(page: Page) {
    this.ordersPage = new OrdersPage(page);
  }

  async validateID(expectedId: number): Promise<boolean> {
    const receivedIdText = await (await this.ordersPage.getOrderId()).textContent();
    const clearText = receivedIdText?.replace(/[^\d]/g, '');

    if (!clearText) {
      throw new Error(
        `Недопустимое значение ${clearText}, проверьте значения receivedIdText = ${receivedIdText}, \n clearText = ${clearText}`
      );
    }

    return +clearText === expectedId;
  }

  async validateTotalPrice(expectedTotalPrice: string): Promise<boolean> {
    const receivedTextPrice = await (await this.ordersPage.getOrderItemPrice()).textContent();
    const expectedTextTotalPrice = await clearPrice(expectedTotalPrice);

    if (!receivedTextPrice || !expectedTextTotalPrice) {
      throw Error(
        `Одно из значений пришло пустым, проверьте данные: receivedTextPrice = ${receivedTextPrice}\n expectedTextTotalPrice = ${expectedTextTotalPrice}`
      );
    }

    const clearPriceUSD = await clearPrice(receivedTextPrice);
    const convertToRub = Math.round(clearPriceUSD * 87.9);

    return expectedTextTotalPrice === convertToRub;
  }
}
