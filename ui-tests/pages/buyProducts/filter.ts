import { ICategory } from '../../types/buyProducts/filter.ts';
import { logDecorator } from '../../utils/decorators.ts';
import { BuyProductsPage } from './buyProducts.ts';

export class FilterPages extends BuyProductsPage {
  public searchInput = this.page.locator('#search');
  public categorySelect = this.page.locator('#category');
  public priceSort = this.page.locator('#sort-by-price');
  public ratingSort = this.page.locator('#sort-by-rating');
  public rangePriceButton = this.page.getByTestId('btn-range-price');
  public rangePriceContainer = this.page.locator('.renderTrack');
  public firstSliderRange = this.rangePriceContainer.locator('div').first();
  public secondSliderRange = this.rangePriceContainer.locator('div').last();
  public confirmRangePriceButton = this.page.getByTestId('btn-range-confirm');

  @logDecorator
  async search(value: string) {
    await this.searchInput.fill(value);
  }

  @logDecorator
  async chooseCategory(value: ICategory) {
    await this.categorySelect.selectOption(value);
  }

  @logDecorator
  async choosePriceSort(value: 'asc' | 'desc') {
    await this.priceSort.selectOption(value);
  }

  @logDecorator
  async chooseRatingSort(value: 'asc' | 'desc') {
    await this.ratingSort.selectOption(value);
  }

  @logDecorator
  async openRangePrice() {
    await this.rangePriceButton.click();
  }

  @logDecorator
  async closeRangePrice() {
    await this.rangePriceButton.click();
  }

  @logDecorator
  async confirmRangePrice() {
    await this.confirmRangePriceButton.click();
  }
}
