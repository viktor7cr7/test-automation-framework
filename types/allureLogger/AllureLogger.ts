import { RequestOptions } from '../request/request.ts';
import { Response } from '../response/response.ts';

export interface IAllureLogger {
  attachRequest<TRequest>(options: RequestOptions<TRequest>, endpoint: string): void;
  attachResponse<TRequest, TResponse extends object | string | null>(
    options: RequestOptions<TRequest>,
    response: Response<TResponse>
  ): void;
}
