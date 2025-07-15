import { APIResponse } from '@playwright/test';

export interface IHelperParseStrategy {
  isContentType(contentType: string): boolean;
  parse(response: APIResponse): Promise<Record<string, unknown> | string | null>;
}
