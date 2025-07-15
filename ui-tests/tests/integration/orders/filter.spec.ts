import { listOrders } from '../../../data/mock/orders/orders.ts';
import { expect, test } from '../../../fixtures/service.fixtures.ts';

test.describe('Проверка фильтрации и сортировки заказов', () => {
  test('Фильтрация по ID', async ({ ordersSerivce, loginService, mockService }) => {
    const searchId = '68';
    await loginService.login();
    await mockService.getOrders(listOrders);

    await ordersSerivce.searchById(searchId);
  });

  test('Сортировка по price [ASC]', async ({ ordersSerivce, loginService, mockService }) => {
    const sortOption = 'asc';
    await loginService.login();
    await mockService.getOrders(listOrders);

    const result = await ordersSerivce.sortByPrice(sortOption);
    expect(result).toBe(true);
  });

  test('Сортировка по дате [ASC]', async ({ ordersSerivce, loginService, mockService }) => {
    const sortOption = 'asc';
    await loginService.login();
    await mockService.getOrders(listOrders);
    const result = await ordersSerivce.sortByDate(sortOption);
    expect(result).toBe(true);
  });
  test('Сортировка по дате [DESC]', async ({ ordersSerivce, loginService, mockService }) => {
    const sortOption = 'desc';
    await loginService.login();
    await mockService.getOrders(listOrders);
    const result = await ordersSerivce.sortByDate(sortOption);
    expect(result).toBe(true);
  });
});
