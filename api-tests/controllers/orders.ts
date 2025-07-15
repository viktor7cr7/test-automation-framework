import { config, createRequestOptions } from '../config/config.ts';
import { IOrdersResponse } from '../../types/response/responseOrder.ts';
import { BaseController } from './baseController.ts';

const { endpoints } = config;

export class OrdersController extends BaseController {
  async getOrders() {
    return await this.request.send<IOrdersResponse>(
      endpoints.GET_ALL_ORDERS,
      createRequestOptions({ displayUrl: endpoints.GET_ALL_ORDERS })
    );
  }
}
