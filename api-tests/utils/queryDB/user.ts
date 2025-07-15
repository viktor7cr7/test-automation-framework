import { dbConnect } from '../../../db/connect.ts';
import { USER_EMAIL_LOGIN, USER_NAME } from '../../config/environment.ts';

export async function getBalance() {
  const userId = 31;
  try {
    const { amount } = await dbConnect.one<{ amount: string }>(
      'SELECT amount from balances where user_id = $1',
      userId
    );
    return +(+amount).toFixed();
  } catch (error) {
    console.error(error);
    throw Error('Неудачный запрос к базе данных, проверьте подключение');
  }
}

export async function getUserInfo() {
  const userId = 31;
  try {
    const result = await dbConnect.one('SELECT * from users where id = $1', [userId]);
    return result;
  } catch (error) {
    console.error(error);
    throw Error('Неудачный запрос к базе данных, проверьте подключение');
  }
}

export async function updateInfoUser() {
  const userId = 31;
  try {
    await dbConnect.none('UPDATE users SET email = $1, name = $2 where id = $3', [USER_EMAIL_LOGIN, USER_NAME, userId]);
  } catch (error) {
    console.error(error);
    throw Error('Неудачный запрос к базе данных, проверьте подключение');
  }
}
