import { test as base } from '@playwright/test';
import { ProductsController } from '../api-tests/controllers/products.ts';
import { AuthController } from '../api-tests/controllers/auth.ts';
import { UserController } from '../api-tests/controllers/users.ts';
import { AddFundsController } from '../api-tests/controllers/addFunds.ts';
import { ItemsOrderController } from '../api-tests/controllers/itemsOrder.ts';

interface ApiControllers {
  productsController: ProductsController;
  authController: AuthController;
  userController: UserController;
  addFundsController: AddFundsController;
  itemsOrderController: ItemsOrderController;
}

export const test = base.extend<ApiControllers>({
  productsController: async ({ request }, use) => {
    await use(new ProductsController(request));
  },
  authController: async ({ request }, use) => {
    return await use(new AuthController(request));
  },
  userController: async ({ request }, use) => {
    return await use(new UserController(request));
  },
  addFundsController: async ({ request }, use) => {
    return await use(new AddFundsController(request));
  },
  itemsOrderController: async ({ request }, use) => {
    return await use(new ItemsOrderController(request));
  },
});

export { expect } from '@playwright/test';
