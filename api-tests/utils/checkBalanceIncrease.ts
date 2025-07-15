import { expect } from '@playwright/test';

export function checkBalanceIncrease(oldBalance: number, currentBalance: number, amountIncrease: number) {
  const resultIncrease = oldBalance + amountIncrease === currentBalance;
  expect
    .soft(
      resultIncrease,
      `Баланс увеличился на ожидаемую суммую: Начальный баланс = ${oldBalance},
    Текущий баланс = ${currentBalance}
    Сумма увелечения = ${amountIncrease}`
    )
    .toBe(true);
}
