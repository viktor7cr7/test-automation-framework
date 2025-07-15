import { BuyProductsService } from '../services/buyProducts-service.ts';
import { LoginService } from '../services/login-service.ts';
import { OrdersService } from '../services/orders-serivce.ts';
import { RegisterService } from '../services/register-serivce.ts';
import { test as base } from './mock-fixtures.ts';

interface IServiceFixtures {
  registerService: RegisterService;
  loginService: LoginService;
  buyProductsService: BuyProductsService;
  ordersSerivce: OrdersService;
}

export const test = base.extend<IServiceFixtures>({
  registerService: async ({ page }, use) => {
    return await use(new RegisterService(page));
  },
  loginService: async ({ page }, use) => {
    return await use(new LoginService(page));
  },
  buyProductsService: async ({ page }, use) => {
    return await use(new BuyProductsService(page));
  },
  ordersSerivce: async ({ page }, use) => {
    return await use(new OrdersService(page));
  },
});

export { expect } from '@playwright/test';
