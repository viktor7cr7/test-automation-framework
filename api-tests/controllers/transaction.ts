import { ITransactions } from '../../types/response/responseTransactions.ts';
import { config, createRequestOptions } from '../config/config.ts';
import { HTTPMethods } from '../../types/request/request.ts';
import { BaseController } from './baseController.ts';

const { endpoints } = config;

export class TransactonController extends BaseController {
  async getTransactions() {
    const endpoint = endpoints.GET_TRANSACTIONS;
    return await this.request.send<ITransactions>(
      endpoints.GET_TRANSACTIONS,
      createRequestOptions({ method: HTTPMethods.GET, displayUrl: endpoint })
    );
  }
}
