import { RequestOptions } from '../request/request.ts';
import { Response } from '../response/response.ts';

export interface IAllureLogger {
  attachRequest<TRequest>(options: RequestOptions<TRequest>): void;
  attachResponse<TRequest, TResponse extends object | string>(
    options: RequestOptions<TRequest>,
    response: Response<TResponse>
  ): void;
}
