import { dbConnect } from '../../../db/connect.ts';

export async function setBalance(amount: number) {
  const userId = 31;
  try {
    return await dbConnect.query('UPDATE balances SET amount=$1 where user_id = $2', [amount, userId]);
  } catch (error) {
    console.error(error);
    throw Error('Неудачный запрос к базе данных, проверьте подключение');
  }
}

export async function getInfoBalanceTransaction(idTranscation: number) {
  try {
    const { amount, status } = await dbConnect.one(
      'select amount, status from transaction_balances where transaction_balances_id = $1',
      [idTranscation]
    );
    return {
      amount: +(+amount).toFixed(),
      status,
    };
  } catch (error) {
    console.error(error);
    throw Error('Неудачный запрос к базе данных, проверьте подключение');
  }
}

