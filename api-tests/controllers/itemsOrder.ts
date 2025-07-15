import { APIRequestContext } from '@playwright/test';
import { config, createRequestOptions } from '../config/config.ts';
import { IItemRatingResponse, IItemsOrderResponse } from '../../types/response/responseItemsOrder.ts';
import { AuthController } from './auth.ts';
import { USER_EMAIL_LOGIN, USER_PASSWORD } from '../config/environment.ts';
import { HTTPMethods } from '../../types/request/request.ts';
import { IGetRatingItem } from '../../types/request/requestItemsOrder.ts';
import { BaseController } from './baseController.ts';

const { endpoints } = config;

export class ItemsOrderController extends BaseController {
  private auth: AuthController;
  constructor(contextApi: APIRequestContext) {
    super(contextApi)
    this.auth = new AuthController(contextApi);
  }

  async getItemsOrder(orderId: number) {
    const headers = (await this.auth.login({ email: USER_EMAIL_LOGIN, password: USER_PASSWORD }))['headers'];
    const options = createRequestOptions({ ...headers, displayUrl: endpoints.GET_ORDER_ITEM(orderId) });
    return await this.request.send<IItemsOrderResponse>(
      endpoints.GET_ORDER_ITEM(orderId),
      createRequestOptions(options)
    );
  }

  async getItemRating(data: IGetRatingItem) {
    const headers = (await this.auth.login({ email: USER_EMAIL_LOGIN, password: USER_PASSWORD }))['headers'];
    const options = createRequestOptions({
      method: HTTPMethods.POST,
      data,
      ...headers,
      displayUrl: endpoints.GET_CURRENT_RATING_ITEM,
    });
    return await this.request.send<IItemRatingResponse>(endpoints.GET_CURRENT_RATING_ITEM, options);
  }
}
