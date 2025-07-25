import { test } from '../../../fixtures/services-fixtures.ts';
import { IAllureLogger } from '../../../types/allureLogger/AllureLogger.ts';
import { RequestOptions } from '../../../types/request/request.ts';
import { Response } from '../../../types/response/response.ts';

export class RequestAllureLogger implements IAllureLogger {
  private testInfo = test.info();
  public attachRequest<TRequest>(options: RequestOptions<TRequest>) {
    this.testInfo.attach(`Request method ${options.method} ${options.url}`, {
      body: JSON.stringify({ headers: options.headers, ...(options.data && { body: options.data }) }, null, 2),
      contentType: 'application/json',
    });
  }

  public attachResponse<TRequest, TResponse extends object | string>(
    options: RequestOptions<TRequest>,
    response: Response<TResponse>
  ) {
    this.testInfo.attach(`response ${options.method} ${response.url}`, {
      body: JSON.stringify({ headers: response.headers, body: response.body }, null, 2),
      contentType: 'application/json',
    });
  }
}
