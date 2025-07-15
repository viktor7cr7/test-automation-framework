import { IAddFunds, IWebhookStripeAddFunds } from '../../types/request/addFunds.ts';
import { config, createRequestOptions } from '../config/config.ts';
import { HTTPMethods } from '../../types/request/request.ts';
import { IWebhookStripe } from '../../types/response/responseProduct.ts';
import { IWebhookStripeAddFundsResponse } from '../../types/response/addFundsResponse.ts';
import { BaseController } from './baseController.ts';

const { endpoints } = config;

export class AddFundsController extends BaseController {
  async addFunds(body: IAddFunds) {
    const options = createRequestOptions({ method: HTTPMethods.PATCH, data: body, displayUrl: endpoints.ADD_FUNDS });
    return await this.request.send<IWebhookStripeAddFundsResponse>(endpoints.ADD_FUNDS, options);
  }

  async verifyStripe(body: IWebhookStripeAddFunds) {
    const options = createRequestOptions({
      method: HTTPMethods.POST,
      data: body,
      displayUrl: endpoints.WEB_HOOK_STRIPE,
    });
    return await this.request.send<IWebhookStripe>(endpoints.WEB_HOOK_STRIPE, options);
  }
}
