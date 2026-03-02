import { expect } from '@playwright/test';
import Ajv from 'ajv';
import { formatSchemaErrorsForCI, mappingErrorJson } from './mapping-error-json-shema';
import { allure } from 'allure-playwright';

const ajv = new Ajv({ allErrors: true });

export function schemaValidation(data: object, schema: object) {
  const validate = ajv.compile(schema);
  const isValid = validate(data);

  if (!isValid) {
    console.error(mappingErrorJson(validate.errors!, data));
    console.error(`Ошибка схема: ${JSON.stringify(schema, null, 2)}`);
    console.error(`Полученные данные: ${JSON.stringify(data, null, 2)}`);
  //  allure.attachment('ошибки схемы: ', JSON.stringify(mappingErrorJson(validate.errors!, data)), 'application/json');
  }

  allure.step('Проверка валидации схемы', async () => {
    expect(isValid).toBe(true);
  });
}
