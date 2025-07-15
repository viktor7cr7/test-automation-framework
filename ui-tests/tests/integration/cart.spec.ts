import { generateDataProduct } from '../../../data/generateData.ts';
import { expect, test } from '../../fixtures/service.fixtures.ts';
import { clearPrice } from '../../utils/clearPrice.ts';

test.describe('Проверка отображения и взаимодействия с корзиной', () => {
  test('Корректное отображение пустого состояния', async ({ cartModal, loginService, dashboardPage }) => {
    await loginService.login();
    await dashboardPage.openCart();
    expect(await cartModal.getTextContainer()).toBe('Нет добавленных товаров');
    expect(await cartModal.getPriceText()).toBe('Total Cost: ₽ 0');
    expect(await cartModal.getPaymentMethodValue()).toBe('Credit Card');
    await expect(cartModal.buyButton).toBeVisible();
  });

  test('Корректное отображение товаров в корзине', async ({ cartModal, loginService, dashboardPage }) => {
    await loginService.login();
    let { name, price, quantity = 1 } = generateDataProduct({});
    const dataProduct: object[] = [];
    dataProduct.push({ name, price, quantity });
    await cartModal.page.evaluate(
      (dataProduct) => localStorage.setItem('cart', JSON.stringify(dataProduct)),
      dataProduct
    );

    await dashboardPage.openCart();

    let productPrice = await clearPrice((await cartModal.getProductPriceAt(0)) as string);
    expect(productPrice).toBe(price);
    expect(await cartModal.getProductNameAt(0)).toBe(name);
    expect(Number(await cartModal.getProductQuantityAt(0))).toBe(quantity);

    await cartModal.closeCart();

    ({ name, price, quantity = 3 } = generateDataProduct({}));
    dataProduct.push({ name, price, quantity });
    await cartModal.page.evaluate(
      (dataProduct) => localStorage.setItem('cart', JSON.stringify(dataProduct)),
      dataProduct
    );

    await dashboardPage.openCart();

    productPrice = await clearPrice((await cartModal.getProductPriceAt(1)) as string);
    expect(productPrice).toBe(price);
    expect(await cartModal.getProductNameAt(1)).toBe(name);
    expect(Number(await cartModal.getProductQuantityAt(1))).toBe(+quantity);
  });
  test('Изменение количества и стоимости продуктов в корзине', async ({ cartModal, loginService, dashboardPage }) => {
    await loginService.login();
    const { name, price, quantity = 1 } = generateDataProduct({});
    const newValueQuantity = 5;
    const dataProduct: object[] = [];
    dataProduct.push({ name, price, quantity });
    await cartModal.page.evaluate(
      (dataProduct) => localStorage.setItem('cart', JSON.stringify(dataProduct)),
      dataProduct
    );

    await dashboardPage.openCart();

    const totalPrice = await clearPrice((await cartModal.getPriceText()) as string);
    const productPrice = await clearPrice((await cartModal.getProductPriceAt(0)) as string);
    expect(totalPrice).toBe(productPrice);
    expect(Number(await cartModal.getProductQuantityAt(0))).toBe(quantity);

    await cartModal.updateQuantity(newValueQuantity, 0);

    const priceWithRecolculation = await clearPrice((await cartModal.getPriceText()) as string);
    expect(priceWithRecolculation).toBe(productPrice * newValueQuantity);
    expect(Number(await cartModal.getProductQuantityAt(0))).toBe(newValueQuantity);
  });
  test('Удаление продуктов из корзины', async ({ cartModal, loginService, dashboardPage }) => {
    await loginService.login();
    const { name, price, quantity = 1 } = generateDataProduct({});

    const dataProduct: object[] = [];
    dataProduct.push({ name, price, quantity });
    await cartModal.page.evaluate(
      (dataProduct) => localStorage.setItem('cart', JSON.stringify(dataProduct)),
      dataProduct
    );

    await dashboardPage.openCart();

    const items = (await cartModal.cartItem.all()).length;
    expect(items).toBe(1);

    await cartModal.deleteProduct(0);

    const recalculationItems = (await cartModal.cartItem.all()).length;
    expect(recalculationItems).toBe(0);
  });
});
