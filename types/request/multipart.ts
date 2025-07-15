export type MultipartValue =
  | string
  | number
  | boolean
  | ReadableStream
  | {
      name: string;
      mimeType: string;
      buffer: Buffer;
    };

export type PlaywrightMultipart =
  | FormData
  | {
      [key: string]: MultipartValue;
    };
