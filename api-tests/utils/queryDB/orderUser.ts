import { dbConnect } from '../../../db/connect.ts';

export async function orderInfo(orderId: number) {
  const { total_price, status } = await dbConnect.one(
    'SELECT total_price, status from orders where order_id = $1',
    orderId
  );
  return {
    total_price,
    status,
  };
}
