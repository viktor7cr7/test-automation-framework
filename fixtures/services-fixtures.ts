import { test as base } from '../fixtures/controllers-fixture.ts';
import { AddFundsService } from '../services/add-funds.ts';
import { AuthServices } from '../services/auth-service.ts';
import { ItemsOrderServices } from '../services/items-order.ts';
import { OrdersService } from '../services/orders.ts';
import { ProductService } from '../services/product-service.ts';
import { TransactionService } from '../services/transcations.ts';
import { UserService } from '../services/user.ts';

interface IServicesFixtures {
  authServices: AuthServices;
  productServices: ProductService;
  addFundsService: AddFundsService;
  ordersService: OrdersService;
  itemsOrderServices: ItemsOrderServices;
  userService: UserService;
  transactionService: TransactionService;
}

export const test = base.extend<IServicesFixtures>({
  authServices: async ({ request }, use) => {
    return await use(new AuthServices(request));
  },
  productServices: async ({ request }, use) => {
    return await use(new ProductService(request));
  },
  addFundsService: async ({ request }, use) => {
    return await use(new AddFundsService(request));
  },
  ordersService: async ({ request }, use) => {
    return await use(new OrdersService(request));
  },
  itemsOrderServices: async ({ request }, use) => {
    return await use(new ItemsOrderServices(request));
  },
  userService: async ({ request }, use) => {
    return await use(new UserService(request));
  },
  transactionService: async ({ request }, use) => {
    return await use(new TransactionService(request));
  },
});

export { expect } from '@playwright/test';
