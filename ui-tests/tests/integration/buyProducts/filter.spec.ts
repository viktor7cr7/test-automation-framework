import { productsForFilters } from '../../../data/mock/buyProducts/filter.ts';
import { expect, test } from '../../../fixtures/service.fixtures.ts';
import { config } from '../../../../api-tests/config/config.ts';
import { changeElementDirection, getElements } from '../../../utils/html/htmlSuppport.ts';
import { ICategory } from '../../../types/buyProducts/filter.ts';
import * as allure from 'allure-js-commons';

test.describe('Проверка фильтрации продуктов', () => {
  test('Фильтрация по поиску', async ({ mockService, buyProductsPage, filterPages, loginService }) => {
    allure.severity('critical');
    allure.issue('jira.com', 'Фильтрация по поиску продуктов');

    await loginService.login();
    await mockService.getProducts(productsForFilters);
    const productSearchName = productsForFilters.products[0]['name'];
    await buyProductsPage.interceptRequest(
      filterPages.search.bind(filterPages),
      `${config.endpoints.GET_PRODUCTS}?search=${productSearchName}`,
      productSearchName
    );
    await expect
      .poll(async () => (await getElements(buyProductsPage.productItem)).length)
      .toBe(productsForFilters['products'].length);
  });
  test('Фильтрация по категории', async ({ mockService, buyProductsPage, filterPages, loginService }) => {
    await loginService.login();
    await mockService.getProducts(productsForFilters);
    const productCategory = ICategory.КРАСОТА_И_ЗДОРОВЬЕ;
    await buyProductsPage.interceptRequest(
      filterPages.chooseCategory.bind(filterPages),
      `${config.endpoints.GET_PRODUCTS}?search=&category=${productCategory}`,
      productCategory
    );
    await expect
      .poll(async () => (await getElements(buyProductsPage.productItem)).length)
      .toBe(productsForFilters['products'].filter((elem) => elem.category === productCategory).length);
  });
  test('Сортировка по цене (ASC)', async ({ mockService, buyProductsPage, filterPages, loginService }) => {
    await loginService.login();
    await mockService.getProducts(productsForFilters);
    const sortOption = 'asc';
    await buyProductsPage.interceptRequest(
      filterPages.choosePriceSort.bind(filterPages),
      `${config.endpoints.GET_PRODUCTS}?search=&category=All&sort-by-price=asc&sort-by-rating=%D0%9D%D0%B5+%D0%B2%D1%8B%D0%B1%D1%80%D0%B0%D0%BD%D0%BE&sort=price:asc,rating:`,
      sortOption
    );
  });
  test('Сортировка по цене (DESC)', async ({ mockService, buyProductsPage, filterPages, loginService }) => {
    await loginService.login();
    await mockService.getProducts(productsForFilters);
    const sortOption = 'desc';
    await buyProductsPage.interceptRequest(
      filterPages.choosePriceSort.bind(filterPages),
      `${config.endpoints.GET_PRODUCTS}?search=&category=All&sort-by-price=desc&sort-by-rating=%D0%9D%D0%B5+%D0%B2%D1%8B%D0%B1%D1%80%D0%B0%D0%BD%D0%BE&sort=price:desc,rating:`,
      sortOption
    );
    await expect
      .poll(async () => (await getElements(buyProductsPage.productItem)).length)
      .toBe(productsForFilters['products'].length);
  });
  test('Сортировка по рейтингу (ASC)', async ({ mockService, buyProductsPage, filterPages, loginService }) => {
    await loginService.login();
    await mockService.getProducts(productsForFilters);
    const sortOption = 'asc';
    await buyProductsPage.interceptRequest(
      filterPages.chooseRatingSort.bind(filterPages),
      `${config.endpoints.GET_PRODUCTS}?search=&category=All&sort-by-price=%D0%9D%D0%B5+%D0%B2%D1%8B%D0%B1%D1%80%D0%B0%D0%BD%D0%BE&sort-by-rating=asc&sort=price:,rating:asc`,
      sortOption
    );
    await expect
      .poll(async () => (await getElements(buyProductsPage.productItem)).length)
      .toBe(productsForFilters['products'].length);
  });
  test('Сортировка по рейтингу (DESC)', async ({ mockService, buyProductsPage, filterPages, loginService }) => {
    await loginService.login();
    await mockService.getProducts(productsForFilters);
    const sortOption = 'desc';
    await buyProductsPage.interceptRequest(
      filterPages.chooseRatingSort.bind(filterPages),
      `${config.endpoints.GET_PRODUCTS}?search=&category=All&sort-by-price=%D0%9D%D0%B5+%D0%B2%D1%8B%D0%B1%D1%80%D0%B0%D0%BD%D0%BE&sort-by-rating=desc&sort=price:,rating:desc`,
      sortOption
    );
    await expect
      .poll(async () => (await getElements(buyProductsPage.productItem)).length)
      .toBe(productsForFilters['products'].length);
  });
  test('Фильтрация по диапазону цену (range)', async ({ mockService, buyProductsPage, filterPages, loginService }) => {
    await loginService.login();
    await mockService.getProducts(productsForFilters);
    await filterPages.openRangePrice();
    await buyProductsPage.interceptRequest(
      changeElementDirection,
      `${config.endpoints.GET_PRODUCTS}?search=&category=All&sort-by-price=%D0%9D%D0%B5+%D0%B2%D1%8B%D0%B1%D1%80%D0%B0%D0%BD%D0%BE&sort-by-rating=%D0%9D%D0%B5+%D0%B2%D1%8B%D0%B1%D1%80%D0%B0%D0%BD%D0%BE&sort=price:,rating:&minPrice=0&maxPrice=98214`,
      filterPages.page,
      filterPages.secondSliderRange,
      filterPages.rangePriceContainer,
      '10',
      () => filterPages.confirmRangePrice()
    );
    await expect
      .poll(async () => (await getElements(buyProductsPage.productItem)).length)
      .toBe(productsForFilters['products'].length);
  });
});
