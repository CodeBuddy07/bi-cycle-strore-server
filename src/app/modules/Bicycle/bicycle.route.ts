import express from 'express';
import { BicycleControllers } from './bicycle.controller';

const router = express.Router();

router.post('/products', BicycleControllers.createBicycle);
router.get('/products', BicycleControllers.getBicycles);
router.get('/products/:productId', BicycleControllers.getSpecificBicycle);
router.post('/products/:productId', BicycleControllers.updateSpecificBicycle);
router.delete('/products/:productId', BicycleControllers.deleteSpecificBicycle);

export const BicycleRoutes = router;
