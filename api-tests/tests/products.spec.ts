import { expect, test } from '../../fixtures/services-fixtures.ts';
import { generateDataProduct } from '../../data/generateData.ts';
import { assertionRange, assertionSort, assertionValue } from '../utils/assertion/assertion.ts';
import { getValuesArrayObjects } from '../utils/getValuesArrayObject.ts';
import { createProduct } from '../utils/queryDB/createProduct.ts';
import { deleteProduct } from '../utils/queryDB/deleteProduct.ts';
import { setBalance } from '../utils/queryDB/balanceUser.ts';

test.describe('Фильтрация продуктов', () => {
  let idsProduct: number[];
  test.afterEach(async () => {
    await deleteProduct(idsProduct);
  });

  test('Фильтрация по поиску', async ({ productsController }) => {
    const searchName = 'тестовый продукт';
    const dataProduct = generateDataProduct({ name: searchName });
    const productsId = getValuesArrayObjects(await createProduct(1, dataProduct), 'productId');
    console.log(productsId);
    const queryParams = new URLSearchParams({
      search: searchName,
    });
    const response = await productsController.getAllProducts(queryParams.toString());
    console.log(response.body);
    expect(assertionValue(response.body.products, 'name', searchName)).toBe(true);

    idsProduct = productsId;
  });

  test('Фильтрация по категории', async ({ productsController }) => {
    const dataProduct = generateDataProduct({});
    const filterCategory = dataProduct.category;
    const productsId = getValuesArrayObjects(await createProduct(3, dataProduct), 'productId');

    const queryParams = new URLSearchParams({
      category: filterCategory,
    });
    const response = await productsController.getAllProducts(queryParams.toString());
    console.log(response.body);
    expect(assertionValue(response.body.products, 'category', filterCategory)).toBe(true);

    idsProduct = productsId;
  });

  test('Сортировка по цене (по убыванию)', async ({ productsController }) => {
    const sortOptins = 'price:desc';
    const productsId = getValuesArrayObjects(await createProduct(1), 'productId');

    const queryParams = new URLSearchParams({
      sort: sortOptins,
      limit: '100',
    });
    const response = await productsController.getAllProducts(queryParams.toString());
    console.log(response.body);
    expect(assertionSort(response.body.products, 'new_price', 'desc')).toBe(true);

    idsProduct = productsId;
  });

  test('Сортировка по цене (по возрастанию)', async ({ productsController }) => {
    const sortOptins = 'price:asc';
    const productsId = getValuesArrayObjects(await createProduct(5), 'productId');

    const queryParams = new URLSearchParams({
      sort: sortOptins,
      limit: '100',
    });
    const response = await productsController.getAllProducts(queryParams.toString());
    console.log(response.body);
    expect(assertionSort(response.body.products, 'new_price', 'asc')).toBe(true);

    idsProduct = productsId;
  });

  test('Сортировка по рейтингу (по убыванию)', async ({ productsController }) => {
    const sortOptins = 'rating:desc';
    const productsId = getValuesArrayObjects(await createProduct(5), 'productId');

    const queryParams = new URLSearchParams({
      sort: sortOptins,
      limit: '100',
    });
    const response = await productsController.getAllProducts(queryParams.toString());
    console.log(response.body);
    expect(assertionSort(response.body.products, 'rating', 'desc')).toBe(true);

    idsProduct = productsId;
  });

  test('Сортировка по рейтингу (по возрастанию)', async ({ productsController }) => {
    const sortOptins = 'rating:asc';
    const productsId = getValuesArrayObjects(await createProduct(5), 'productId');

    const queryParams = new URLSearchParams({
      sort: sortOptins,
      limit: '100',
    });
    const response = await productsController.getAllProducts(queryParams.toString());
    console.log(response.body);
    expect(assertionSort(response.body.products, 'rating', 'asc')).toBe(true);

    idsProduct = productsId;
  });

  test('Фильтрация по диапазону цены', async ({ productsController }) => {
    const rangePrice = {
      min: '50000',
      max: '300000',
    };
    const productsId = getValuesArrayObjects(await createProduct(5), 'productId');

    const queryParams = new URLSearchParams({
      minPrice: rangePrice.min,
      maxPrice: rangePrice.max,
      limit: '100',
    });
    const response = await productsController.getAllProducts(queryParams.toString());
    console.log(response.body);
    expect(assertionRange(response.body.products, 'new_price', +rangePrice.min, +rangePrice.max)).toBe(true);

    idsProduct = productsId;
  });
});

test.describe('Покупка товаров', () => {
  const balanceValue = 10000000;
  let idsProduct: number[] = [];
  test.beforeEach(async () => {
    await setBalance(balanceValue);
  });

  test.afterEach(async () => {
    await deleteProduct(idsProduct);
  });

  test('Покупка одиночного товара через Balance', async ({ productServices }) => {
    const response = await productServices.buyProduct('Balance', balanceValue);
    expect(response.body.msg).toBe('успех');
    expect(response.body.success_url).toBe('http://localhost:5173/dashboard/user/orders');

    idsProduct = [response.productId];
  });

  test('Покупка мультипл товаров через Balance', async ({ productServices }) => {
    const response = await productServices.buyProducts('Balance', balanceValue);
    expect(response.body.msg).toBe('успех');
    expect(response.body.success_url).toBe('http://localhost:5173/dashboard/user/orders');

    idsProduct = response.productId;
  });

  test('Покупка одиночного товара через Stripe [Credit Card]', async ({ productServices }) => {
    const response = await productServices.buyProduct('Credit Card', balanceValue);
    expect(response.body.session.cancel_url).toBe('http://localhost:5173/dashboard/user/all-products');
    expect(response.body.session.success_url).toBe('http://localhost:5173/dashboard/user/orders');
    expect(response.body.session.currency).toBe('usd');
    expect(response.body.session.url).toContain('https://checkout.stripe.com/c/pay/');

    idsProduct = [response.productId];
  });

  test('Покупка мультипл товаров через Stripe [Credit Card]', async ({ productServices }) => {
    const response = await productServices.buyProducts('Credit Card', balanceValue);
    expect(response.body.session.cancel_url).toBe('http://localhost:5173/dashboard/user/all-products');
    expect(response.body.session.success_url).toBe('http://localhost:5173/dashboard/user/orders');
    expect(response.body.session.currency).toBe('usd');
    expect(response.body.session.url).toContain('https://checkout.stripe.com/c/pay/');

    idsProduct = response.productId;
  });
});
