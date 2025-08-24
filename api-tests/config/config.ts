import { PlaywrightMultipart } from '../../types/request/multipart.ts';
import { HTTPMethods, RequestOptions } from '../../types/request/request.ts';

export const config = {
  baseUrl: `${process.env.BASE_URL}`,
  endpoints: {
    REGISTER: '/api/v1/auth/register',
    LOGIN: '/api/v1/auth/login',
    LOGOUT: '/api/v1/auth/login',
    VERIFY_EMAIL: '/api/v1/auth/verify-email/user',
    FORGOT_PASWORD: '/api/v1/auth/forgot-password',
    RESET_PASSWORD: '/api/v1/auth/reset-password',
    GET_PRODUCTS: '/api/v1/products',
    GET_PRODUCT_ID: (id: string) => `/api/v1/products/${id}`,
    SET_RATING_PRODUCT: (orderId: number) => `/api/v1/products/${orderId}`,
    GET_CURRENT_USER: `/api/v1/current-user`,
    GET_ALL_ORDERS: `/api/v1/orders`,
    GET_CURRENT_RATING_ITEM: `/api/v1/orders/item/rating`,
    GET_ORDER_ITEM: (id: number) => `/api/v1/orders/item/${id}`,
    GET_TRANSACTIONS: '/api/v1/transaction',
    UPDATE_INFO_USER: '/api/v1/update-info',
    GET_TOTAL_AMOUNT: '/api/v1/total-amount',
    DELETE_USER: (email: string) => `/api/v1/support/user/${email}`,
    BUY_PRODUCT: `/api/v1/create-checkout-session`,
    ADD_FUNDS: `/api/v1/create-checkout-session`,
    WEB_HOOK_STRIPE: `/api/v1/webhook`,
  },
};

export function createRequestOptions<T = undefined>({
  method = HTTPMethods.GET,
  data,
  multipart,
  displayUrl,
  params,
}: {
  method?: HTTPMethods;
  data?: T;
  multipart?: PlaywrightMultipart;
  params?: string;
  displayUrl: string;
}): RequestOptions<T> {
  return {
    method,
    ...(data ? { data } : {}),
    multipart,
    params,
    displayUrl,
  };
}
