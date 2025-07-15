import { expect, Page } from '@playwright/test';
import { BuyProductsPage } from '../pages/buyProducts/buyProducts.ts';
import { BuyModal } from '../pages/modal/buyProducts/buy-modal.ts';
import { clearPrice } from '../utils/clearPrice.ts';
import { OrdersPage } from '../pages/orders/orders.ts';
import { StripePage } from '../pages/external/stripe.ts';
import { CartModal } from '../pages/modal/buyProducts/cart-modal.ts';
import { DashboardPage } from '../pages/dashboardPage.ts';
import { sortStringArrays } from '../utils/sortArrays.ts';
import { logDecorator } from '../utils/decorators.ts';

export class BuyProductsService {
  private buyProductsPage: BuyProductsPage;
  private buyModal: BuyModal;
  private ordersPage: OrdersPage;
  private stripePage: StripePage;
  private cartModal: CartModal;
  private dashboardPage: DashboardPage;
  constructor(page: Page) {
    this.buyProductsPage = new BuyProductsPage(page);
    this.buyModal = new BuyModal(page);
    this.ordersPage = new OrdersPage(page);
    this.stripePage = new StripePage(page);
    this.cartModal = new CartModal(page);
    this.dashboardPage = new DashboardPage(page);
  }

  @logDecorator
  async buyProducts(quantity: string, position: number, paymentMethod: 'Balance' | 'Credit Card') {
    const productName = (await this.buyProductsPage.getProductName(position)) as string;
    const productPrice = await clearPrice(
      (await (await this.buyProductsPage.getProductPrice(position)).textContent()) as string
    );
    await this.buyProductsPage.clickBuyProductButton(position);
    await this.buyModal.waitForOpenedAt(position);
    await this.buyModal.setQuantity(quantity, position);
    await this.buyModal.selectPaymentMethod(paymentMethod, position);
    const productNameModal = await this.buyModal.getProductName(position);
    const productPriceModal = await clearPrice(
      (await (await this.buyModal.getProductPrice(position)).textContent()) as string
    );
    expect(productName).toBe(productNameModal);
    expect(productPrice).toBe(productPriceModal * +quantity);

    await this.buyModal.clickBuyProductButton(position);
    let priceOrder;
    switch (paymentMethod) {
      case 'Balance':
        await this.ordersPage.waitForOpened();
        priceOrder = await clearPrice(
          (await (await this.ordersPage.getOrderItemPrice()).last().textContent()) as string
        );
        expect(productPriceModal).toBe(priceOrder);
        break;
      case 'Credit Card':
        await this.stripePage.waitForOpened();
        await this.stripePage.actionPay();
        await this.ordersPage.waitForOpened();
        priceOrder = await clearPrice(
          (await (await this.ordersPage.getOrderItemPrice()).last().textContent()) as string
        );
        expect(productPriceModal).toBe(priceOrder);
    }
  }

  @logDecorator
  async buyProductsFromCart(position: number[], paymentMethod: 'Balance' | 'Credit Card') {
    const namesProduct = await this.buyProductsPage.getProductsName(position);
    const priceProduct = await this.buyProductsPage.getProductsPrice(position);

    await this.buyProductsPage.addProductToCartAt(position);
    await this.dashboardPage.openCart();
    await this.cartModal.waitForOpened();

    const namesCartProduct = await this.cartModal.getProductsName(position);
    const totalPriceProductCart = await clearPrice(
      (await (await this.cartModal.getTotalPrice()).textContent()) as string
    );
    console.log('priceProduct = ' + priceProduct);
    const totalPriceProduct = priceProduct.reduce((acc, price) => (acc += price), 0);

    const [sortingNamesProduct, sortingNamesCartProduct] = sortStringArrays(
      namesProduct as string[],
      namesCartProduct as string[]
    );

    expect.soft(sortingNamesProduct).toEqual(sortingNamesCartProduct);
    expect.soft(totalPriceProduct).toBe(totalPriceProductCart);

    let priceOrder;
    switch (paymentMethod) {
      case 'Balance':
        await this.cartModal.selectPaymentMethod('Balance');
        await this.cartModal.clickBuyProductButton();
        await this.ordersPage.waitForOpened();
        priceOrder = await clearPrice(
          (await (await this.ordersPage.getOrderItemPrice()).last().textContent()) as string
        );
        expect(totalPriceProductCart).toBe(priceOrder);
        break;
      case 'Credit Card':
        await this.cartModal.selectPaymentMethod('Credit Card');
        await this.cartModal.clickBuyProductButton();
        await this.stripePage.waitForOpened();
        await this.stripePage.actionPay();
        await this.ordersPage.waitForOpened();
        priceOrder = await clearPrice(
          (await (await this.ordersPage.getOrderItemPrice()).last().textContent()) as string
        );
        expect(totalPriceProductCart).toBe(priceOrder);
        break;
      default:
        throw Error('Укажите доступный метод оплаты');
    }
  }
}
