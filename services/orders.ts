import { APIRequestContext, expect } from '@playwright/test';
import { OrdersController } from '../api-tests/controllers/orders.ts';
import { ProductService } from './product-service.ts';
import { validateResponse } from '../api-tests/utils/responseValidation.ts';
import { schemaValidation } from '../api-tests/utils/schemaValidation.ts';
import { ordersSchema } from '../data/JsonSchema/orders.ts';

export class OrdersService {
  private request: OrdersController;
  private products: ProductService;
  constructor(contextApi: APIRequestContext) {
    this.request = new OrdersController(contextApi);
    this.products = new ProductService(contextApi);
  }

  async getAllOrders(countOrders: number) {
    const productsCreate = Array.from({ length: countOrders }).map(
      async () => await this.products.buyProduct('Credit Card', 1000000)
    );

    const orderIds = (await Promise.all(productsCreate)).map((product) => product.orderId);

    const response = await this.request.getOrders();
    validateResponse(response, 200);
    schemaValidation(response.body, ordersSchema);

    const orderIdsResponse = response.body.orders.filter((order) => orderIds.includes(order.order_id));

    expect.soft(orderIdsResponse.length).toBe(countOrders);
  }
}
