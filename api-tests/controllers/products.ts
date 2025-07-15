import { HTTPMethods } from '../../types/request/request.ts';
import { APIRequestContext } from '@playwright/test';
import { config, createRequestOptions } from '../config/config.ts';
import { IProductResponse, IProductsResponse } from '../../types/response/responseProduct.ts';
import { ResponseInfo } from '../../types/response/response.ts';
import { ISetRatingItem } from '../../types/request/requestItemsOrder.ts';
import { AuthController } from './auth.ts';
import { USER_EMAIL_LOGIN, USER_PASSWORD } from '../config/environment.ts';
import { IBuyProduct, IWebhookStripe } from '../../types/request/buyProduct.ts';
import { BaseController } from './baseController.ts';

const { endpoints } = config;

export class ProductsController extends BaseController {
  private auth: AuthController;
  constructor(contextApi: APIRequestContext) {
    super(contextApi);
    this.auth = new AuthController(contextApi);
  }

  async getAllProducts(queryParams?: string) {
    const headers = (await this.auth.login({ email: USER_EMAIL_LOGIN, password: USER_PASSWORD }))['headers'];
    const endpoint = endpoints.GET_PRODUCTS;
    const options = createRequestOptions({
      params: queryParams,
      ...headers,
      displayUrl: endpoint,
    });
    return await this.request.send<IProductsResponse>(endpoints.GET_PRODUCTS, options);
  }

  async getProduct(id: string) {
    const endpoint = endpoints.GET_PRODUCT_ID(id);
    return await this.request.send<IProductResponse>(
      endpoints.GET_PRODUCT_ID(id),
      createRequestOptions({ displayUrl: endpoint })
    );
  }

  async setRatingProduct(orderId: number, body: ISetRatingItem) {
    const headers = (await this.auth.login({ email: USER_EMAIL_LOGIN, password: USER_PASSWORD }))['headers'];
    const endpoint = endpoints.SET_RATING_PRODUCT(orderId);
    const options = createRequestOptions({ method: HTTPMethods.PUT, data: body, ...headers, displayUrl: endpoint });
    return await this.request.send<ResponseInfo>(endpoint, options);
  }

  async buyProduct<T extends object>(body: IBuyProduct) {
    const headers = (await this.auth.login({ email: USER_EMAIL_LOGIN, password: USER_PASSWORD }))['headers'];
    const endpoint = endpoints.BUY_PRODUCT;
    const options = createRequestOptions({ method: HTTPMethods.POST, data: body, ...headers, displayUrl: endpoint });
    return await this.request.send<T>(endpoint, options);
  }

  async verifyStripe(body: IWebhookStripe) {
    const headers = (await this.auth.login({ email: USER_EMAIL_LOGIN, password: USER_PASSWORD }))['headers'];
    const endpoint = endpoints.WEB_HOOK_STRIPE;
    const options = createRequestOptions({ method: HTTPMethods.POST, data: body, ...headers, displayUrl: endpoint });
    return await this.request.send<IWebhookStripe>(endpoint, options);
  }
}
