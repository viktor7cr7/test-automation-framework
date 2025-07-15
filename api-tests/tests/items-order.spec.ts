import { expect, test } from '../../fixtures/services-fixtures.ts';

test.describe('Товары заказа', () => {
  test('Получение списка продуктов заказа', async ({ itemsOrderServices }) => {
    await itemsOrderServices.getItems();
  });

  test('Установка рейтинга продукту', async ({ productServices }) => {
    const response = await productServices.setRatingItem(3);
    expect(response.msg).toBe('Спасибо за оценку !');
  });

  test('Получение рейтинга продукта', async ({ itemsOrderServices }) => {
    await itemsOrderServices.getItems();
  });
});
