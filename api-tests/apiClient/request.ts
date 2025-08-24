import { APIRequestContext } from '@playwright/test';
import { RequestOptions } from '../../types/request/request.ts';
import { config } from '../config/config.ts';
import { IHelperResponse, Response } from '../../types/response/response.ts';
import { IAllureLogger } from '../../types/allureLogger/AllureLogger.ts';
import { IAuthHelper } from '../../types/request/auth.ts';

export class RequestApi {
  constructor(
    private apiContext: APIRequestContext,
    private authHelper: IAuthHelper,
    private allureLogger: IAllureLogger,
    private parser: IHelperResponse
  ) {}
  async send<TResponse extends object, TRequest = unknown>(
    endpoint: string,
    requestOptions: RequestOptions<TRequest>
  ): Promise<Response<TResponse>> {
    await this.authHelper.authIfNeeded();

    const mergeHeaders = {
      ...this.authHelper.defaultHeaders,
      ...(requestOptions['headers'] || {}),
    };

    this.allureLogger.attachRequest(requestOptions, endpoint);

    const { url, ...safeRequestOptions } = requestOptions;

    try {
      const response = await this.apiContext.fetch(`${config.baseUrl}${endpoint}`, {
        ...safeRequestOptions,
        headers: mergeHeaders,
      });

      if (response.status() >= 500) {
        throw new Error(`Ошибка сервера: ${response.status()}`);
      }

      const result = await this.parser.transformResponse<TResponse>(response);

      try {
        this.allureLogger.attachResponse(requestOptions, result);
      } catch (error) {
        console.warn('Ошибка при логировании ответа', error);
      }

      return result;
    } catch (error: unknown) {
      const message = `Ошибка при выполнении запроса на ${endpoint}`;
      if (error instanceof Error) {
        console.error(`${message}: ${error.message}`, error);
        throw new Error(`${message}: ${error.message}`);
      }
      console.error(`${message}: Неизвестная ошибка`, error);
      throw new Error(`${message}: Неизвестная ошибка`);
    }
  }
}
