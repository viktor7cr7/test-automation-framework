import { Page } from '@playwright/test';
import { config } from '../../api-tests/config/config.ts';
import { BASE_UI_URL } from '../pages/config/environment.ts';
import { IProductsResponse } from '../../types/response/responseProduct.ts';
import { IOrdersResponse } from '../../types/response/responseOrder.ts';
import { allure } from 'allure-playwright';

const { endpoints } = config;

export class MockService {
  constructor(private page: Page) {}

  @mockDecorator
  async register(data: { msg: string }) {
    return this.page.route(`${BASE_UI_URL}${endpoints.REGISTER}`, (route) => {
      route.fulfill({
        body: JSON.stringify(data),
      });
    });
  }

  @mockDecorator
  async forgotPassword(data: { msg: string }) {
    return this.page.route(`${BASE_UI_URL}${endpoints.FORGOT_PASWORD}`, (route) => {
      route.fulfill({
        body: JSON.stringify(data),
      });
    });
  }

  @mockDecorator
  async resetPassword(data: { msg: string }) {
    return this.page.route(`${BASE_UI_URL}${endpoints.RESET_PASSWORD}`, (route) => {
      route.fulfill({
        body: JSON.stringify(data),
      });
    });
  }

  @mockDecorator
  async getProducts(data: IProductsResponse) {
    return this.page.route(
      (url) =>
        url.pathname.includes('/api/v1/products') &&
        (!url.searchParams.has('page') || url.searchParams.get('page') === '1'),
      (route) => {
        route.fulfill({
          body: JSON.stringify(data),
        });
      }
    );
  }

  @mockDecorator
  async getProductsSecondPage(data: IProductsResponse) {
    return this.page.route(
      (url) => url.pathname.includes('/api/v1/products') && url.searchParams.get('page') === '2',
      (route) => {
        route.fulfill({
          body: JSON.stringify(data),
        });
      }
    );
  }

  @mockDecorator
  async getOrders(data: IOrdersResponse) {
    return this.page.route(/api\/v1\/orders/, (route) => {
      route.fulfill({
        body: JSON.stringify(data),
      });
    });
  }
}

function mockDecorator(method: Function, context: ClassMethodDecoratorContext) {
  return async function (this: any, ...args: any[]) {
    const originalRoute = this.page.route;

    let interceptedUrl: string | undefined;
    let interceptedBody: any;

    this.page.route = (url: string | RegExp, handler: Function) => {
      const wrappedHandler = (route: any) => {
        interceptedUrl = route.request().url();
        allure.step(`Мокируем запрос ${interceptedUrl}`, async () => {});

        const originalFulfill = route.fulfill;

        route.fulfill = function (response: any) {
          interceptedBody = response.body;
          allure.step(`Body: ${interceptedBody}`, async () => {});
          return originalFulfill.call(route, response);

        };;
        return handler(route);
      };

      return originalRoute.call(this.page, url, wrappedHandler);
    };

    const result = await method.apply(this, args);

    return result;
  };
}
