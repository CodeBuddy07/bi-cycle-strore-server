import { NextFunction, Request, Response } from 'express';
import { BicycleServices } from './bicycle.service';

const createBicycle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bicycle = req.body;

    const result = await BicycleServices.createBicycleIntoDB(bicycle);

    res.status(200).json({
      success: true,
      message: 'Bicycle created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getBicycles = async (req: Request, res: Response, next: NextFunction) => {
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
  } catch (err) {
    next(err);
  }
};

const getSpecificBicycle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { productId } = req?.params;

    const result = await BicycleServices.getSpecificBicyclesFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Bicycle retrieved successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateSpecificBicycle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { productId } = req?.params;
    const data = req.body;

    const result = await BicycleServices.updateSpecificBicyclesFromDB(
      productId,
      data,
    );

    res.status(200).json({
      success: true,
      message: 'Bicycle updated successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteSpecificBicycle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { productId } = req?.params;

    const result =
      await BicycleServices.deleteSpecificBicyclesFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Bicycle deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const BicycleControllers = {
  createBicycle,
  getBicycles,
  getSpecificBicycle,
  updateSpecificBicycle,
  deleteSpecificBicycle,
};
