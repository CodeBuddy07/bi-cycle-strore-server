import { BicycleModel } from '../Bicycle/bicycle.model';
import { Order } from './order.interface';
import { OrderModel } from './order.model';

const createOrderIntoDB = async (order: Order) => {
  const product = await BicycleModel.findById(order.product);
  console.log(product);
  if (!product) {
    throw new Error('No such product in stock!');
  }
  await product.updateInventory(order.quantity);
  const result = await OrderModel.create(order);
  return result;
};

export const orderServices = {
  createOrderIntoDB,
};
