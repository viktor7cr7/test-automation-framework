import { APIResponse } from '@playwright/test';

export interface ResponseInfo {
  msg: string;
}

export interface Response<T extends object | null | string> {
  status: number;
  headers: Record<string, string>;
  url: string;
  body: T;
}

export interface IHelperResponse {
  transformResponse<T extends object | null | string>(response: APIResponse): Promise<Response<T>>;
}
