# Test info

- Name: Проверка отображения и взаимодействия с корзиной >> Корректное отображение пустого состояния
- Location: E:\tests\ui-tests\tests\integration\cart.spec.ts:6:8

# Error details

```
Error: expect(locator).toBeVisible()

Locator: getByTestId('search-info')
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 20000ms
  - waiting for getByTestId('search-info')

    at BuyProductsPage.waitForOpened (E:\tests\ui-tests\pages\basePage.ts:13:37)
    at E:\tests\ui-tests\services\login-service.ts:19:30
```

# Test source

```ts
   1 | import { expect, Locator, Page } from '@playwright/test';
   2 | import { BASE_UI_URL } from './config/environment.ts';
   3 | import { urlAssertion } from '../utils/urlDecode.ts';
   4 | import { allure } from 'allure-playwright';
   5 |
   6 | export abstract class BasePage {
   7 |   abstract uniqeElement: Locator;
   8 |   constructor(public page: Page) {
   9 |     this.page = page;
  10 |   }
  11 |
  12 |   async waitForOpened() {
> 13 |     await expect(this.uniqeElement).toBeVisible({ timeout: 20000 });
     |                                     ^ Error: expect(locator).toBeVisible()
  14 |   }
  15 |
  16 |   @interceptRequestDecorator
  17 |   async interceptRequest<T extends unknown[]>(fn: (...args: T) => Promise<void>, endpoint: string, ...args: T) {
  18 |     const request = await Promise.all([
  19 |       this.page.waitForRequest((request) => {
  20 |         return urlAssertion(request.url(), `${BASE_UI_URL}${endpoint}`);
  21 |       }),
  22 |       fn(...args),
  23 |     ]);
  24 |     return request;
  25 |   }
  26 | }
  27 |
  28 | function interceptRequestDecorator(method: Function, context: ClassMethodDecoratorContext) {
  29 |   return function (this: any, ...args: any[]) {
  30 |     const endpoint = decodeURI(args[1])
  31 |     allure.step(`Перехватываем запрос с эндпоинтом = ${endpoint}`, async () => {});
  32 |     return method.apply(this, args);
  33 |   };
  34 | }
  35 |
```