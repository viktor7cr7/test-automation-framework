import { test as base } from '@playwright/test';
import { HomePage } from '../pages/homePage.ts';
import { BuyProductsPage } from '../pages/buyProducts/buyProducts.ts';
import { RegisterPage } from '../pages/registerPage.ts';
import { LoginPage } from '../pages/loginPage.ts';
import { ForgotPasswordPage } from '../pages/forgotPasswordPage.ts';
import { ResetPasswordPage } from '../pages/resetPasswordPage.ts';
import { FilterPages } from '../pages/buyProducts/filter.ts';
import { CartModal } from '../pages/modal/buyProducts/cart-modal.ts';
import { DashboardPage } from '../pages/dashboardPage.ts';
import { OrdersPage } from '../pages/orders/orders.ts';

interface IPageFixtures {
  homePage: HomePage;
  buyProductsPage: BuyProductsPage;
  ordersPage: OrdersPage;
  registerPage: RegisterPage;
  loginPage: LoginPage;
  forgotPasswordPage: ForgotPasswordPage;
  resetPasswordPage: ResetPasswordPage;
  filterPages: FilterPages;
  cartModal: CartModal;
  dashboardPage: DashboardPage;
}

export const test = base.extend<IPageFixtures>({
  homePage: async ({ page }, use) => {
    return await use(new HomePage(page));
  },
  buyProductsPage: async ({ page }, use) => {
    return await use(new BuyProductsPage(page));
  },
  filterPages: async ({ page }, use) => {
    return await use(new FilterPages(page));
  },
  registerPage: async ({ page }, use) => {
    return await use(new RegisterPage(page));
  },
  loginPage: async ({ page }, use) => {
    return await use(new LoginPage(page));
  },
  forgotPasswordPage: async ({ page }, use) => {
    return await use(new ForgotPasswordPage(page));
  },
  resetPasswordPage: async ({ page }, use) => {
    return await use(new ResetPasswordPage(page));
  },
  cartModal: async ({ page }, use) => {
    return await use(new CartModal(page));
  },
  dashboardPage: async ({ page }, use) => {
    return await use(new DashboardPage(page));
  },
  ordersPage: async ({ page }, use) => {
    return await use(new OrdersPage(page));
  },
});

export { expect } from '@playwright/test';
