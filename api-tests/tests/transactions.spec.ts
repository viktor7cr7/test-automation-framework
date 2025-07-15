import { test } from '../../fixtures/services-fixtures.ts';

test('Получение списка тразакций', async ({ transactionService }) => {
  await transactionService.getTransactions();
});
