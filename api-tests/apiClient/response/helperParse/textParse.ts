import { APIResponse } from '@playwright/test';
import { IHelperParseStrategy } from '../../../../types/request/helperParse/helperParse.ts';

export class TextParse implements IHelperParseStrategy {
  isContentType(contentType: string) {
    return contentType.includes('text/plain');
  }

  async parse(response: APIResponse) {
    return await response.text();
  }
}
