import { NextFunction, Request, Response } from 'express';
import { BicycleServices } from './bicycle.service';

const createBicycle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bicycle = req.body;

    const result = await BicycleServices.createBicycleIntoDB(bicycle);

    res.status(200).json({
      message: 'Bicycle created successfully',
      success: true,
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
      message: 'Bicycles retrieved successfully',
      success: true,
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
      message: 'Bicycle retrieved successfully',
      success: true,
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
      message: 'Bicycle updated successfully',
      success: true,
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
      message: 'Bicycle deleted successfully',
      success: true,
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
