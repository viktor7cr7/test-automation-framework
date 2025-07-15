import { dbConnect } from '../../../db/connect.ts';

export async function getTokenUser(email: string) {
  const { verificationtoken: token } = await dbConnect.one('SELECT verificationtoken from users where email = $1', [
    email,
  ]);

  if (!token) {
    throw Error('Не удалось получить токен, проверьте наличие токена в БД');
  }

  return token as string;
}

export async function getTokenPassordUser(email: string) {
  const { password_token: token } = await dbConnect.one('SELECT password_token from users where email = $1', [email]);

  if (!token) {
    throw Error('Не удалось получить токен, проверьте наличие токена в БД');
  }

  return token as string;
}
