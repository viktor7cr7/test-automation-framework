import { allure } from 'allure-playwright';
import { config } from '../../../../api-tests/config/config.ts';
import { firstPage, secondPage } from '../../../data/mock/buyProducts/pagination.ts';
import { expect, test } from '../../../fixtures/service.fixtures.ts';
import { getElements } from '../../../utils/html/htmlSuppport.ts';

test.describe('Проверка пагинации', () => {
  test.skip('Переход на вторую страницу через button', async ({ mockService, buyProductsPage, loginService }) => {
    await mockService.getProducts(firstPage);
    await mockService.getProductsSecondPage(secondPage);
    await loginService.login();
    await buyProductsPage.interceptRequest(
      buyProductsPage.clickNextPage.bind(buyProductsPage),
      `${config.endpoints.GET_PRODUCTS}?search=&category=All&sort-by-price=%D0%9D%D0%B5+%D0%B2%D1%8B%D0%B1%D1%80%D0%B0%D0%BD%D0%BE&sort-by-rating=%D0%9D%D0%B5+%D0%B2%D1%8B%D0%B1%D1%80%D0%B0%D0%BD%D0%BE&sort=price:,rating:&page=2`
    );
    expect((await getElements(buyProductsPage.productItem)).length).toBe(10);
  });
  test('Переход на вторую страницу через нумерацию', async ({ mockService, buyProductsPage, loginService }) => {
    await mockService.getProducts(firstPage);
    await mockService.getProductsSecondPage(secondPage);
    await loginService.login();
    await buyProductsPage.interceptRequest(
      buyProductsPage.navigatePagination.bind(buyProductsPage),
      `${config.endpoints.GET_PRODUCTS}?search=&category=All&sort-by-price=%D0%9D%D0%B5+%D0%B2%D1%8B%D0%B1%D1%80%D0%B0%D0%BD%D0%BE&sort-by-rating=%D0%9D%D0%B5+%D0%B2%D1%8B%D0%B1%D1%80%D0%B0%D0%BD%D0%BE&sort=price:,rating:&page=2`,
      2
    );
    expect((await getElements(buyProductsPage.productItem)).length).toBe(10);
  });
  test('Переход на первую страницу через button', async ({ mockService, buyProductsPage, loginService }) => {
    await mockService.getProducts(firstPage);
    await mockService.getProductsSecondPage(secondPage);
    await loginService.login();
    await buyProductsPage.navigatePagination(2);
    await buyProductsPage.interceptRequest(
      buyProductsPage.clickPrevPage.bind(buyProductsPage),
      `${config.endpoints.GET_PRODUCTS}?search=&category=All&sort-by-price=%D0%9D%D0%B5+%D0%B2%D1%8B%D0%B1%D1%80%D0%B0%D0%BD%D0%BE&sort-by-rating=%D0%9D%D0%B5+%D0%B2%D1%8B%D0%B1%D1%80%D0%B0%D0%BD%D0%BE&sort=price:,rating:&page=1`
    );
    expect((await getElements(buyProductsPage.productItem)).length).toBe(10);
  });
  test('Переход на первую страницу через нумерацию', async ({ mockService, buyProductsPage, loginService }) => {
    await mockService.getProducts(firstPage);
    await loginService.login();
    await mockService.getProductsSecondPage(secondPage);
    await buyProductsPage.navigatePagination(2);
    await buyProductsPage.interceptRequest(
      buyProductsPage.navigatePagination.bind(buyProductsPage),
      `${config.endpoints.GET_PRODUCTS}?search=&category=All&sort-by-price=%D0%9D%D0%B5+%D0%B2%D1%8B%D0%B1%D1%80%D0%B0%D0%BD%D0%BE&sort-by-rating=%D0%9D%D0%B5+%D0%B2%D1%8B%D0%B1%D1%80%D0%B0%D0%BD%D0%BE&sort=price:,rating:&page=1`,
      1
    );
    return await allure.step(
      `Ожидаемое количество элементов ${buyProductsPage.productItem} должно быть равно`,
      async () => expect((await getElements(buyProductsPage.productItem)).length).toBe(10)
    );
  });
});
