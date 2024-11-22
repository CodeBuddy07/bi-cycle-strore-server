import express from 'express';
import { BicycleControllers } from './bicycle.controller';

const router = express.Router();

router.post('/products', BicycleControllers.createBicycle)