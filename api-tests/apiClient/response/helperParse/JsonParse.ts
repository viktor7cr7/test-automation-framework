import { APIResponse } from '@playwright/test';
import { IHelperParseStrategy } from '../../../../types/request/helperParse/helperParse.ts';

export class JsonParse implements IHelperParseStrategy {
  isContentType(contentType: string) {
    return contentType.includes('application/json');
  }

  async parse(response: APIResponse) {
    return await response.json();
  }
}
