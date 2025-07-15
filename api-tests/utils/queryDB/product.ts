import { dbConntectAdmin } from '../../../db/connect.ts';

export async function getInfoProduct(productId: number) {
  try {
    const { rating } = await dbConntectAdmin.one('SELECT rating from products where product_id = $1', [productId]);
    return +rating;
  } catch (error) {
    console.error(error);
    throw Error('Неудачный запрос к базе данных, проверьте подключение');
  }
}
