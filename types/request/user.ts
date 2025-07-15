import { MultipartValue } from './multipart.ts';

export interface IUserUpdateInfo {
  name: string;
  email: string;
}

export type IUserUpdateInfoMultipart = Record<keyof IUserUpdateInfo, MultipartValue>;
