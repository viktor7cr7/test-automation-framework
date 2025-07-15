import { APIResponse } from '@playwright/test';
import { IHelperParseStrategy } from '../../../types/request/helperParse/helperParse.ts';
import { JsonParse } from './helperParse/JsonParse.ts';
import { TextParse } from './helperParse/textParse.ts';
import { IHelperResponse } from '../../../types/response/response.ts';
import { Response } from '../../../types/response/response.ts';

export class HelperResponseStrategy implements IHelperResponse {
  private parsers: IHelperParseStrategy[] = [];
  constructor(parsers?: IHelperParseStrategy[]) {
    this.parsers = parsers ?? [new JsonParse(), new TextParse()];
  }
  async transformResponse<T extends object | string | null>(response: APIResponse): Promise<Response<T>> {
    const contentType = response['headers']()['content-type'];

    const parser = this.parsers.find((parse) => parse.isContentType(contentType));

    if (!parser) {
      throw new Error(`Нет обработчика для данного MIME типа`);
    }

    const body = await parser.parse(response);

    return {
      status: response!.status(),
      body: body as T,
      headers: response!.headers(),
      url: response.url(),
    };
  }
}
