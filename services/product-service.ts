import { APIRequestContext, expect } from '@playwright/test';
import { ProductsController } from '../api-tests/controllers/products.ts';
import { createProduct } from '../api-tests/utils/queryDB/createProduct.ts';
import { IBuyProduct } from '../types/request/buyProduct.ts';
import { schemaValidation } from '../api-tests/utils/schemaValidation.ts';
import { validateResponse } from '../api-tests/utils/responseValidation.ts';
import { balanceUSDValidation, balanceValidation } from '../api-tests/utils/balanceValidation.ts';
import { buyProductSchema } from '../data/JsonSchema/products.ts';
import { getValuesArrayObjects } from '../api-tests/utils/getValuesArrayObject.ts';
import { IBuyProductResponse, IBuyProductResponseStripe } from '../types/response/responseProduct.ts';
import { orderInfo } from '../api-tests/utils/queryDB/orderUser.ts';
import { validationValue } from '../api-tests/utils/validationValue.ts';
import { getItemInfo } from '../api-tests/utils/queryDB/itemsOrder.ts';
import { getInfoProduct } from '../api-tests/utils/queryDB/product.ts';
import { responseDefaultSchema } from '../data/JsonSchema/auth.ts';

export class ProductService {
  private productController: ProductsController;
  constructor(apiContext: APIRequestContext) {
    this.productController = new ProductsController(apiContext);
  }

  async buyProduct(
    paymentMethod: 'Balance',
    startBalance: number
  ): Promise<{ body: IBuyProductResponse; productId: number }>;
  async buyProduct(
    paymentMethod: 'Credit Card',
    startBalance: number
  ): Promise<{ body: IBuyProductResponseStripe; productId: number; orderId: number }>;
  async buyProduct(paymentMethod: 'Credit Card' | 'Balance', startBalance: number) {
    const [data] = await createProduct(1);
    const dataProduct: IBuyProduct = {
      paymentMethod,
      items: [
        {
          name: data.name,
          description: data.description,
          product_id: data.productId,
          price: data.price,
          quantity: 1,
        },
      ],
    };

    switch (paymentMethod) {
      case 'Balance': {
        const response = await this.productController.buyProduct<IBuyProductResponse>(dataProduct);
        validateResponse(response, 200);
        schemaValidation(response.body, buyProductSchema);
        balanceValidation(startBalance, data.price);
        return {
          body: response.body,
          productId: data.productId,
        };
      }
      case 'Credit Card': {
        const response = await this.productController.buyProduct<IBuyProductResponseStripe>(dataProduct);
        const orderId = +response.body.session.metadata.orderId;
        validateResponse(response, 200);
        let { total_price, status } = await orderInfo(orderId);
        validationValue(status, 'unpaid');
        balanceUSDValidation(data.price, +total_price);

        const dataWebHook = {
          type: 'checkout.session.completed',
          data: {
            object: {
              metadata: {
                orderId,
                type: 'products_buy',
                infoQuntityAndIdProduct: [
                  {
                    product_id: data.productId,
                    quantity: 1,
                  },
                ],
              },
            },
          },
        };
        const responseHook = await this.productController.verifyStripe(dataWebHook);

        ({ status } = await orderInfo(orderId));
        validateResponse(responseHook, 200);
        validationValue(status, 'paid');

        return {
          orderId,
          body: response.body,
          productId: data.productId,
        };
      }
    }
  }

  async buyProducts(
    paymentMethod: 'Balance',
    startBalance: number
  ): Promise<{ body: IBuyProductResponse; productId: number[] }>;
  async buyProducts(
    paymentMethod: 'Credit Card',
    startBalance: number
  ): Promise<{ body: IBuyProductResponseStripe; productId: number[]; orderId: number }>;
  async buyProducts(paymentMethod: 'Credit Card' | 'Balance', startBalance: number) {
    const data = await createProduct(3);
    const items = [];
    let totalPrice = 0;

    for (const key of data) {
      items.push({ ...key, product_id: key.productId, quantity: 1 });
      totalPrice += key.price;
    }
    const dataProduct: IBuyProduct = {
      paymentMethod,
      items: items,
    };

    const idsProduct: number[] = getValuesArrayObjects(items, 'product_id');
    switch (paymentMethod) {
      case 'Balance': {
        const response = await this.productController.buyProduct<IBuyProductResponse>(dataProduct);
        validateResponse(response, 200);
        schemaValidation(response.body, buyProductSchema);
        balanceValidation(startBalance, totalPrice);
        return {
          body: response.body,
          productId: idsProduct,
        };
      }
      case 'Credit Card': {
        const response = await this.productController.buyProduct<IBuyProductResponseStripe>(dataProduct);
        const orderId = response.body.session.metadata.orderId;
        validateResponse(response, 200);
        let { total_price, status } = await orderInfo(orderId);
        validationValue(status, 'unpaid');
        balanceUSDValidation(totalPrice, +total_price);

        const dataWebHook = {
          type: 'checkout.session.completed',
          data: {
            object: {
              metadata: {
                orderId,
                type: 'products_buy',
                infoQuntityAndIdProduct: items,
              },
            },
          },
        };

        const responseHook = await this.productController.verifyStripe(dataWebHook);

        ({ status } = await orderInfo(orderId));
        validateResponse(responseHook, 200);
        validationValue(status, 'paid');

        return {
          orderId,
          body: response.body,
          productId: idsProduct,
        };
      }
    }
  }

  async setRatingItem(rating: number) {
    const { orderId } = await this.buyProduct('Credit Card', 1000000);

    const { item_id, product_id: productId } = await getItemInfo(orderId);

    const data = {
      orderId,
      productId,
      rating,
    };

    const response = await this.productController.setRatingProduct(item_id, data);
    validateResponse(response, 200);
    schemaValidation(response.body, responseDefaultSchema);

    const currentRating = await getInfoProduct(productId);

    expect(currentRating).toBe(rating);

    return response.body;
  }
}
