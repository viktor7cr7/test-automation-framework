import { PlaywrightMultipart } from './multipart.ts';

export const enum HTTPMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export const enum ContentType {
  'Application/json' = 'application/json',
  'Multipart/form-data' = 'multipart/form-data',
}

export interface RequestOptions<T> {
  data?: T;
  method: HTTPMethods;
  displayUrl: string;
  headers?: Record<string, string>;
  multipart?: PlaywrightMultipart;
  params?: string;
  url?: string;
}

