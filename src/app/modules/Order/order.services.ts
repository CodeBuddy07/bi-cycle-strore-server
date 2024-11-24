import { BicycleModel } from '../Bicycle/bicycle.model';
import { Order } from './order.interface';
import { OrderModel } from './order.model';

const createOrderIntoDB = async (order: Order) => {
  const product = await BicycleModel.findById(order.product);
  if (!product) {
    throw new Error('No product found!');
  }
  await product.updateInventory(order.quantity);
  const result = await OrderModel.create(order);
  return result;
};

const getRevenueFromDB = async () => {
  const result = await OrderModel.aggregate()
    .addFields({
      product: { $toObjectId: '$product' },
    })
    .lookup({
      from: 'bicycles',
      localField: 'product',
      foreignField: '_id',
      as: 'Matched',
    })
    .unwind('Matched')
    .project({
      revenue: { $multiply: ['$Matched.price', '$quantity'] },
    })
    .group({
      _id: null,
      totalRevenue: { $sum: '$revenue' },
    });
  const data = {
    totalRevenue: result.length > 0 ? result[0].totalRevenue : 0,
  };

  return data;
};

export const orderServices = {
  createOrderIntoDB,
  getRevenueFromDB,
};
