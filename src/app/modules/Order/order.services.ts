import { Order } from './order.interface';
import { OrderModel } from './order.model';

const createOrderIntoDB = async (order: Order) => {
  const product = await OrderModel.findOne({name: "Roadster 5000"});
  console.log(product);
  if (!product) {
    throw new Error('No such product in stock!');
  }
  if (product.quantity < 1) {
    await OrderModel.findByIdAndUpdate(order.product, { inStock: false });
    throw new Error('Product is not in stock!');
  }

  const result = await OrderModel.create(order);
  return result;
};

export const orderServices = {
  createOrderIntoDB,
};
