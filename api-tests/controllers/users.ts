import { APIRequestContext } from '@playwright/test';
import { config, createRequestOptions } from '../config/config.ts';
import { ICurrentUserResponse, totalAmountResponse } from '../../types/response/responseUser.ts';
import { HTTPMethods } from '../../types/request/request.ts';
import { ResponseInfo } from '../../types/response/response.ts';
import { AuthController } from './auth.ts';
import { IUserUpdateInfo, IUserUpdateInfoMultipart } from '../../types/request/user.ts';
import { BaseController } from './baseController.ts';

const { endpoints } = config;

export class UserController extends BaseController {
  auth: AuthController;
  constructor(public contextApi: APIRequestContext) {
    super(contextApi);
    this.auth = new AuthController(contextApi);
  }

  async getCurrentUser() {
    const endpoint = endpoints.GET_CURRENT_USER;
    return await this.request.send<ICurrentUserResponse>(endpoint, createRequestOptions({ displayUrl: endpoint }));
  }

  async updateInfoUser(body: IUserUpdateInfo) {
    const endpoint = endpoints.UPDATE_INFO_USER;
    const option = createRequestOptions({
      method: HTTPMethods.PATCH,
      multipart: body as IUserUpdateInfoMultipart,
      displayUrl: endpoint,
    });

    return await this.request.send<ResponseInfo>(endpoint, option);
  }

  async getTotalAmount() {
    const endpoint = endpoints.GET_TOTAL_AMOUNT;
    return await this.request.send<totalAmountResponse>(
      endpoints.GET_TOTAL_AMOUNT,
      createRequestOptions({ displayUrl: endpoint })
    );
  }

  async deleteUser(email: string) {
    const endpoint = endpoints.DELETE_USER(email);
    return await this.request.send(
      endpoint,
      createRequestOptions({ method: HTTPMethods.DELETE, displayUrl: endpoint })
    );
  }
}
