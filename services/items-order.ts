import { APIRequestContext, expect } from '@playwright/test';
import { ProductService } from './product-service.ts';
import { ItemsOrderController } from '../api-tests/controllers/itemsOrder.ts';
import { validateResponse } from '../api-tests/utils/responseValidation.ts';
import { getRatingItemSchema, itemsOrderSchema } from '../data/JsonSchema/itemsOrder.ts';
import { schemaValidation } from '../api-tests/utils/schemaValidation.ts';
import { getItemInfo } from '../api-tests/utils/queryDB/itemsOrder.ts';

export class ItemsOrderServices {
  private request: ItemsOrderController;
  private products: ProductService;
  constructor(contextApi: APIRequestContext) {
    this.request = new ItemsOrderController(contextApi);
    this.products = new ProductService(contextApi);
  }

  async getItems() {
    const { orderId } = await this.products.buyProducts('Credit Card', 1000000);

    const response = await this.request.getItemsOrder(orderId);
    validateResponse(response, 200);
    schemaValidation(response.body, itemsOrderSchema);

    const itemsLenght = response.body[+orderId].items.length;
    expect.soft(itemsLenght).toBe(3);
  }

  async getRatingItem() {
    const { orderId } = await this.products.buyProduct('Credit Card', 1000000);

    const { item_id: itemId, product_id: productId } = await getItemInfo(orderId);

    const data = {
      productId,
      itemId,
    };

    const response = await this.request.getItemRating(data);
    validateResponse(response, 200);
    schemaValidation(response.body, getRatingItemSchema);
  }
}
