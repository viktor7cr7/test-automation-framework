import { expect } from '@playwright/test';

export function validationValue<T>(expectedValue: T, receivedValue: T) {
  expect
    .soft(expectedValue, `Валидация данных: Актуальное значение ${expectedValue}, Полученное значение ${receivedValue}`)
    .toBe(receivedValue);
}
