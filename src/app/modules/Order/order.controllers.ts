import { NextFunction, Request, Response } from 'express';
import { orderServices } from './order.services';

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const order = req.body;

    const result = await orderServices.createOrderIntoDB(order);

    res.status(200).json({
      message: 'Order created successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);

  }
};

const getRevenue = async (req: Request, res: Response, next: NextFunction) => {
  try {
    
    const result = await orderServices.getRevenueFromDB();

    res.status(200).json({
      message: 'Revenue calculated successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);

  }
};

export const orderControllers = {
    createOrder,
    getRevenue
} 
