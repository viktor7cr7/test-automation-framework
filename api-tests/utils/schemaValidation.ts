import { expect } from '@playwright/test';
import Ajv from 'ajv';

const ajv = new Ajv();

export function schemaValidation(data: object, schema: object) {
  const validate = ajv.compile(schema);
  const isValid = validate(data);

  if (!isValid) {
    console.error(validate.errors);
    console.error(`Ошибка схема: ${JSON.stringify(schema)}`);
    console.error(`Полученные данные: ${JSON.stringify(data)}`);
  }

  expect.soft(isValid).toBe(true);
}
