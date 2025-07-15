import { expect, Page } from '@playwright/test';
import { OrdersPage } from '../pages/orders/orders.ts';
import { clearPrice } from '../utils/clearPrice.ts';
import { transformDate } from '../utils/date/transformDate.ts';
import { logDecorator, logStepWithReturn } from '../utils/decorators.ts';

export class OrdersService {
  private ordersPage: OrdersPage;

  constructor(page: Page) {
    this.ordersPage = new OrdersPage(page);
  }

  @logDecorator
  async searchById(searchid: string) {
    await this.ordersPage.openPage();
    await this.ordersPage.searchById(searchid);

    const allIdsLocator = await this.ordersPage.orderId.all();
    const result = allIdsLocator.every(async (elem) => (await elem.textContent())?.includes(searchid));
    expect(result).toBe(true);
  }

  @logStepWithReturn
  async sortByPrice(sortOption: 'asc' | 'desc') {
    await this.ordersPage.openPage();
    await this.ordersPage.selectSortByPrice(sortOption);

    const allTotalPricesLocator = await (await this.ordersPage.getOrderItemPrice()).all();
    const task = allTotalPricesLocator.map(async (elem) => await clearPrice((await elem.textContent()) as string));
    const fullfiliedTask = await Promise.all(task);

    function sortByAscending(values: number[]) {
      const result = values.every((elem, index) => {
        if (index === 0) return true;
        if (values[index - 1] <= elem) {
          return true;
        } else {
          return false;
        }
      });
      return result;
    }

    function sortByDescending(values: number[]) {
      const result = values.every((elem, index) => {
        if (index === 0) return true;
        if (values[index - 1] >= elem) {
          return true;
        } else {
          return false;
        }
      });
      return result;
    }

    switch (sortOption) {
      case 'asc':
        return sortByAscending(fullfiliedTask);
      case 'desc':
        return sortByDescending(fullfiliedTask);
      default:
        throw Error('Укажите доступные варианты сортировки: ASC | DESC');
    }
  }

  @logStepWithReturn
  async sortByDate(sortOption: 'asc' | 'desc') {
    await this.ordersPage.openPage();
    await this.ordersPage.selectSortByDate(sortOption);
    await this.ordersPage.page.pause();
    const allDateLocator = await (await this.ordersPage.getOrderDate()).all();
    const task = allDateLocator.map(async (elem) => await elem.textContent());
    const result = await Promise.all(task);

    const clearDate = transformDate(result as string[]);
    console.log(result);
    function sortByAscending(values: string[]) {
      const result = values.every((elem, index) => {
        if (index === 0) return true;
        if (new Date(values[index - 1]) <= new Date(elem)) {
          return true;
        } else {
          return false;
        }
      });
      return result;
    }

    function sortByDescending(values: string[]) {
      const result = values.every((elem, index) => {
        if (index === 0) return true;
        if (new Date(values[index - 1]) >= new Date(elem)) {
          return true;
        } else {
          return false;
        }
      });
      return result;
    }

    switch (sortOption) {
      case 'asc':
        return sortByAscending(clearDate);
      case 'desc':
        return sortByDescending(clearDate);
      default:
        throw Error('Укажите доступные варианты сортировки: ASC | DESC');
    }
  }
}
