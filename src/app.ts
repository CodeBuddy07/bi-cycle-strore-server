import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { BicycleRoutes } from './app/modules/Bicycle/bicycle.route';
import { OrderRoutes } from './app/modules/Order/order.route';
import errorHandler from './app/Middlewares/errorHandler';
const app: Application = express();

//parsers

app.use(express.json());
app.use(cors());

//Application Routes

app.use('/api', BicycleRoutes);
app.use('/api', OrderRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Bi-Cycle store server is running...');
});

app.use(errorHandler);

export default app;
