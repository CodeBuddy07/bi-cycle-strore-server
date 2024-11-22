import { query, Request, Response } from 'express';
import { BicycleServices } from './bicycle.service';

const createBicycle = async (req: Request, res: Response) => {
  try {
    const bicycle = req.body;

    const result = await BicycleServices.createBicycleIntoDB(bicycle);

    res.status(200).json({
      success: true,
      message: 'Bicycle created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: 'Something Went Wrong!',
      error: error,
    });
  }
};

const getBicycles = async (req: Request, res: Response) => {
  try {
    const searchTerm = req?.url?.split('?')[1]?.split('=')[0];
    const value = req?.query?.[searchTerm];

    const result = await BicycleServices.getAllBicyclesFromDB(
      searchTerm,
      value as string,
    );

    res.status(200).json({
      success: true,
      message: 'Bicycles retrieved successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: 'Something Went Wrong!',
      error: error,
    });
  }
};

export const BicycleControllers = {
  createBicycle,
  getBicycles,
};
