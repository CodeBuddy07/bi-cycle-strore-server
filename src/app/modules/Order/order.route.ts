import express from 'express'
import { orderControllers } from './order.controllers';

const router = express.Router();

router.post('/orders', orderControllers.createOrder);

export const OrderRoutes = router;