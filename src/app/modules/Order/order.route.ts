import express from 'express';
import { orderControllers } from './order.controllers';

const router = express.Router();

router.post('/orders', orderControllers.createOrder);
router.get('/orders/revenue', orderControllers.getRevenue);

export const OrderRoutes = router;
