import { test } from '../../fixtures/services-fixtures.ts';

test('Получение списка заказов', async ({ ordersService }) => {
  await ordersService.getAllOrders(1);
});
