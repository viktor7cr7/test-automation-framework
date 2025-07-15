import { IForgotPassword, ILoginData, IRegisterData, IResetPassword } from '../../types/request/auth.ts';
import { config, createRequestOptions } from '../config/config.ts';
import { HTTPMethods } from '../../types/request/request.ts';
import { ResponseInfo } from '../../types/response/response.ts';
import { BaseController } from './baseController.ts';

const { endpoints } = config;

export class AuthController extends BaseController {
  async register(body: IRegisterData) {
    const options = createRequestOptions({ method: HTTPMethods.POST, data: body, displayUrl: endpoints.REGISTER });
    return await this.request.send<ResponseInfo>(endpoints.REGISTER, options);
  }

  async login(body: ILoginData) {
    const options = createRequestOptions({ method: HTTPMethods.POST, data: body, displayUrl: endpoints.LOGIN });
    return await this.request.send<ResponseInfo>(endpoints.LOGIN, options);
  }

  async verifyEmail(queryParams: string) {
    const options = createRequestOptions({
      method: HTTPMethods.POST,
      params: queryParams,
      displayUrl: endpoints.VERIFY_EMAIL,
    });
    return await this.request.send<ResponseInfo>(endpoints.VERIFY_EMAIL, options);
  }

  async forgotPassword(body: IForgotPassword) {
    const options = createRequestOptions({
      method: HTTPMethods.POST,
      data: body,
      displayUrl: endpoints.FORGOT_PASWORD,
    });
    return await this.request.send<ResponseInfo>(endpoints.FORGOT_PASWORD, options);
  }

  async resetPassword(body: IResetPassword) {
    const options = createRequestOptions({
      method: HTTPMethods.POST,
      data: body,
      displayUrl: endpoints.RESET_PASSWORD,
    });
    return await this.request.send<ResponseInfo>(endpoints.RESET_PASSWORD, options);
  }
}
