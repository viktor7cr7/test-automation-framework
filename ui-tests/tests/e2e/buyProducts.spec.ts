import { test } from '../../fixtures/service.fixtures.ts';
import { addAllureMeta } from '../../utils/allureMeta.ts';

test.describe('Проверка покупки товаров', () => {
  test('Покупка товара через модальное окно [Balance]', async ({ buyProductsService, loginService }) => {
    await loginService.login();
    await buyProductsService.buyProducts('1', 1, 'Balance');
  });
  test('Покупка товара через модальное окно [Credit Card]', async ({ buyProductsService, loginService }) => {
    await loginService.login();
    await buyProductsService.buyProducts('1', 1, 'Credit Card');
  });

  test('Покупка товара через корзину [Balance]', async ({ buyProductsService, loginService }, testInfo) => {
    testInfo.annotations.push({ type: 'severity', description: 'critical' });
    testInfo.annotations.push({ type: 'issue', description: 'KAN-123' });

    await loginService.login();
    await buyProductsService.buyProductsFromCart([2, 3], 'Balance');
  });

  test('Покупка товара через корзину [Credit Card]', async ({ buyProductsService, loginService }) => {
    await loginService.login();
    await buyProductsService.buyProductsFromCart([2, 3], 'Credit Card');
  });
});
