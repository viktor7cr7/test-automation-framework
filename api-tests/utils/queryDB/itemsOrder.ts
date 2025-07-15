import { dbConnect } from '../../../db/connect.ts';

export async function getItemInfo(orderId: number) {
  try {
    const { item_id, product_id } = await dbConnect.one(
      'SELECT item_id, product_id from order_items where order_id = $1',
      [orderId]
    );
    return {
      item_id,
      product_id,
    };
  } catch (error) {
    console.error(error);
    throw Error('Неудачный запрос к базе данных, проверьте подключение');
  }
}
