import { APIRequestContext } from '@playwright/test';
import { RequestApi } from '../apiClient/request.ts';
import { AuthHelper } from '../apiClient/request/AuthHelper.ts';
import { HelperResponseStrategy } from '../apiClient/response/ResponseTransform.ts';
import { RequestAllureLogger } from '../apiClient/request/RequestAllureLogger.ts';

export abstract class BaseController {
  protected request: RequestApi;
  constructor(contextApi: APIRequestContext) {
    this.request = new RequestApi(
      contextApi,
      new AuthHelper(contextApi),
      new RequestAllureLogger(),
      new HelperResponseStrategy()
    );
  }
}
