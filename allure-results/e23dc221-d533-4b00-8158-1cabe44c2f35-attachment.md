# Test info

- Name: Проверка фильтрации продуктов >> Фильтрация по поиску
- Location: E:\tests\ui-tests\tests\integration\buyProducts\filter.spec.ts:8:8

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 3
Received: 10
    at E:\tests\ui-tests\tests\integration\buyProducts\filter.spec.ts:17:69
```

# Page snapshot

```yaml
- main:
  - complementary:
    - link "buy products":
      - /url: /dashboard/user/all-products
      - img
      - text: buy products
    - link "orders":
      - /url: /dashboard/user/orders
      - img
      - text: orders
    - link "Add funds":
      - /url: /dashboard/user/add-funds
      - img
      - text: Add funds
    - link "Transactions":
      - /url: /dashboard/user/transaction
      - img
      - text: Transactions
    - link "profile":
      - /url: /dashboard/user/profile
      - img
      - text: profile
  - navigation:
    - button:
      - img
    - heading "dashboard" [level=4]
    - 'button "Balance: 7,110,203"':
      - text: "Balance: 7,110,203"
      - img
    - button "Корзина":
      - img
      - text: Корзина
    - button "avatar":
      - img "avatar"
      - img
  - text: search
  - searchbox "search": Test Product
  - text: category
  - combobox "category":
    - option "All" [selected]
    - option "Электроника"
    - option "Одежда"
    - option "Обувь"
    - option "красота и здоровье"
    - option "Дом и сад"
    - option "Бытовая техника"
    - option "Спорт и отдых"
    - option "Книги"
    - option "Канцтовары"
    - option "Игры и развлечения"
    - option "Хобби и творчество"
  - text: sort-by-price
  - combobox "sort-by-price":
    - option "Не выбрано" [selected]
    - option "asc"
    - option "desc"
  - text: sort-by-rating
  - combobox "sort-by-rating":
    - option "Не выбрано" [selected]
    - option "asc"
    - option "desc"
  - button "Show Price Range"
  - link "Сбросить фильтры":
    - /url: /dashboard/user/all-products
  - heading "4 товаров найдено" [level=5]
  - text: "ID: 678 Test Product Кол-во: 100"
  - img "product_img"
  - text: ₽ 175,872
  - button "Buy Now"
  - button "Add to cart"
  - text: "ID: 744 Test Product 2 Кол-во: 99"
  - img "product_img"
  - text: ₽ 243,602
  - button "Buy Now"
  - button "Add to cart"
  - text: "ID: 747 Test Product 3 Кол-во: 99"
  - img "product_img"
  - text: ₽ 140,024
  - button "Buy Now"
  - button "Add to cart"
- alert:
  - img
  - text: login successful
- button "close"
- progressbar "notification timer"
```

# Test source

```ts
   1 | import { productsForFilters } from '../../../data/mock/buyProducts/filter.ts';
   2 | import { expect, test } from '../../../fixtures/service.fixtures.ts';
   3 | import { config } from '../../../../api-tests/config/config.ts';
   4 | import { changeElementDirection, getElements } from '../../../utils/html/htmlSuppport.ts';
   5 | import { ICategory } from '../../../types/buyProducts/filter.ts';
   6 |
   7 | test.describe('Проверка фильтрации продуктов', () => {
   8 |   test.only('Фильтрация по поиску', async ({ mockService, buyProductsPage, filterPages, loginService }) => {
   9 |     await loginService.login();
  10 |     await mockService.getProducts(productsForFilters);
  11 |     const productSearchName = productsForFilters.products[0]['name'];
  12 |     await buyProductsPage.interceptRequest(
  13 |       filterPages.search.bind(filterPages),
  14 |       `${config.endpoints.GET_PRODUCTS}?search=${productSearchName}`,
  15 |       productSearchName
  16 |     );
> 17 |     expect((await getElements(buyProductsPage.productItem)).length).toBe(productsForFilters['products'].length);
     |                                                                     ^ Error: expect(received).toBe(expected) // Object.is equality
  18 |   });
  19 |   test('Фильтрация по категории', async ({ mockService, buyProductsPage, filterPages, loginService }) => {
  20 |     await loginService.login();
  21 |     await mockService.getProducts(productsForFilters);
  22 |     const productCategory = ICategory.КРАСОТА_И_ЗДОРОВЬЕ;
  23 |     await buyProductsPage.interceptRequest(
  24 |       filterPages.chooseCategory.bind(filterPages),
  25 |       `${config.endpoints.GET_PRODUCTS}?search=&category=${productCategory}`,
  26 |       productCategory
  27 |     );
  28 |     await expect
  29 |       .poll(async () => (await getElements(buyProductsPage.productItem)).length)
  30 |       .toBe(productsForFilters['products'].filter((elem) => elem.category === productCategory).length);
  31 |   });
  32 |   test('Сортировка по цене (ASC)', async ({ mockService, buyProductsPage, filterPages, loginService }) => {
  33 |     await loginService.login();
  34 |     await mockService.getProducts(productsForFilters);
  35 |     const sortOption = 'asc';
  36 |     await buyProductsPage.interceptRequest(
  37 |       filterPages.choosePriceSort.bind(filterPages),
  38 |       `${config.endpoints.GET_PRODUCTS}?search=&category=All&sort-by-price=asc&sort-by-rating=%D0%9D%D0%B5+%D0%B2%D1%8B%D0%B1%D1%80%D0%B0%D0%BD%D0%BE&sort=price:asc,rating:`,
  39 |       sortOption
  40 |     );
  41 |   });
  42 |   test('Сортировка по цене (DESC)', async ({ mockService, buyProductsPage, filterPages, loginService }) => {
  43 |     await loginService.login();
  44 |     await mockService.getProducts(productsForFilters);
  45 |     const sortOption = 'desc';
  46 |     await buyProductsPage.interceptRequest(
  47 |       filterPages.choosePriceSort.bind(filterPages),
  48 |       `${config.endpoints.GET_PRODUCTS}?search=&category=All&sort-by-price=desc&sort-by-rating=%D0%9D%D0%B5+%D0%B2%D1%8B%D0%B1%D1%80%D0%B0%D0%BD%D0%BE&sort=price:desc,rating:`,
  49 |       sortOption
  50 |     );
  51 |     await expect
  52 |       .poll(async () => (await getElements(buyProductsPage.productItem)).length)
  53 |       .toBe(productsForFilters['products'].length);
  54 |   });
  55 |   test('Сортировка по рейтингу (ASC)', async ({ mockService, buyProductsPage, filterPages, loginService }) => {
  56 |     await loginService.login();
  57 |     await mockService.getProducts(productsForFilters);
  58 |     const sortOption = 'asc';
  59 |     await buyProductsPage.interceptRequest(
  60 |       filterPages.chooseRatingSort.bind(filterPages),
  61 |       `${config.endpoints.GET_PRODUCTS}?search=&category=All&sort-by-price=%D0%9D%D0%B5+%D0%B2%D1%8B%D0%B1%D1%80%D0%B0%D0%BD%D0%BE&sort-by-rating=asc&sort=price:,rating:asc`,
  62 |       sortOption
  63 |     );
  64 |     await expect
  65 |       .poll(async () => (await getElements(buyProductsPage.productItem)).length)
  66 |       .toBe(productsForFilters['products'].length);
  67 |   });
  68 |   test('Сортировка по рейтингу (DESC)', async ({ mockService, buyProductsPage, filterPages, loginService }) => {
  69 |     await loginService.login();
  70 |     await mockService.getProducts(productsForFilters);
  71 |     const sortOption = 'desc';
  72 |     await buyProductsPage.interceptRequest(
  73 |       filterPages.chooseRatingSort.bind(filterPages),
  74 |       `${config.endpoints.GET_PRODUCTS}?search=&category=All&sort-by-price=%D0%9D%D0%B5+%D0%B2%D1%8B%D0%B1%D1%80%D0%B0%D0%BD%D0%BE&sort-by-rating=desc&sort=price:,rating:desc`,
  75 |       sortOption
  76 |     );
  77 |     await expect
  78 |       .poll(async () => (await getElements(buyProductsPage.productItem)).length)
  79 |       .toBe(productsForFilters['products'].length);
  80 |   });
  81 |   test('Фильтрация по диапазону цену (range)', async ({ mockService, buyProductsPage, filterPages, loginService }) => {
  82 |     await loginService.login();
  83 |     await mockService.getProducts(productsForFilters);
  84 |     await filterPages.openRangePrice();
  85 |     await buyProductsPage.interceptRequest(
  86 |       changeElementDirection,
  87 |       `${config.endpoints.GET_PRODUCTS}?search=&category=All&sort-by-price=%D0%9D%D0%B5+%D0%B2%D1%8B%D0%B1%D1%80%D0%B0%D0%BD%D0%BE&sort-by-rating=%D0%9D%D0%B5+%D0%B2%D1%8B%D0%B1%D1%80%D0%B0%D0%BD%D0%BE&sort=price:,rating:&minPrice=0&maxPrice=98214`,
  88 |       filterPages.page,
  89 |       filterPages.secondSliderRange,
  90 |       filterPages.rangePriceContainer,
  91 |       '10',
  92 |       () => filterPages.confirmRangePrice()
  93 |     );
  94 |     await expect
  95 |       .poll(async () => (await getElements(buyProductsPage.productItem)).length)
  96 |       .toBe(productsForFilters['products'].length);
  97 |   });
  98 | });
  99 |
```