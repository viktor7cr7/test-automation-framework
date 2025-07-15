import { expect, test } from '../../fixtures/services-fixtures.ts';

test('Пополнение баланса', async ({ addFundsService }) => {
  const response = await addFundsService.addFunds(50);
  expect(response.body.session.success_url).toBe('http://localhost:5173/dashboard/user/transaction');
  expect(response.body.session.cancel_url).toBe('http://localhost:5173/dashboard/user/add-funds');
  expect(response.body.session.url).toContain('https://checkout.stripe.com/c/pay/');
});
