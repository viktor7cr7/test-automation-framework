export interface IRegisterData {
  email: string;
  name: string;
  password: string;
}

export interface ILoginData {
  email: string;
  password: string;
}
export interface IForgotPassword {
  email: string;
}

export interface IResetPassword {
  email: string;
  password: string;
  token: string;
}

export interface IAuthHelper {
  defaultHeaders: object,
  authIfNeeded(): Promise<void>;
}
