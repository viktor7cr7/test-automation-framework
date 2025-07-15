import { expect } from '@playwright/test';
import { getBalance } from './queryDB/user.ts';
import { DOLLAR_EXCHANGE_RATE } from '../config/environment.ts';

export async function balanceValidation(startBalance: number, totalPrice: number) {
  const differenceBalance = startBalance - totalPrice;
  const currentBalance = await getBalance();

  const result = differenceBalance === currentBalance;

  if (!result) {
    console.error(`Стартовый баланс = ${startBalance}
                   Итоговая цена = ${totalPrice}`);
  }

  expect.soft(result).toBe(true);
}

export async function balanceUSDValidation(totalPrice: number, usdOrder: number) {
  const convertUSD = +(totalPrice / DOLLAR_EXCHANGE_RATE).toFixed();

  const transformUsd = +usdOrder.toFixed();
  expect
    .soft(convertUSD, `Значения после конвертации валюты должны быть равны, ${totalPrice} === ${transformUsd}`)
    .toBe(transformUsd);
}
