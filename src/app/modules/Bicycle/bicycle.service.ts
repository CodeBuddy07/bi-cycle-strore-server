import { Bicycle } from './bicycle.interface';
import { BicycleModel } from './bicycle.model';

const createBicycleIntoDB = async (bicycle: Bicycle) => {
  const result = await BicycleModel.create(bicycle);
  return result;
};

const getAllBicyclesFromDB = async (searchTerm: string, value: string) => {
  const result = await BicycleModel.find(
    searchTerm ? { [searchTerm]: value } : {},
  );
  if (result.length < 1) {
    throw new Error('No product found!');
  }
  return result;
};

const getSpecificBicyclesFromDB = async (id: string) => {
  const result = await BicycleModel.findById(id);
  return result;
};

const updateSpecificBicyclesFromDB = async (id: string, data: object) => {
  
  const result = await BicycleModel.findByIdAndUpdate(id, data, {new: true});
  return result;
};

const deleteSpecificBicyclesFromDB = async (id: string) => {
  await BicycleModel.findByIdAndDelete(id);
  return {};
};

export const BicycleServices = {
  createBicycleIntoDB,
  getAllBicyclesFromDB,
  getSpecificBicyclesFromDB,
  updateSpecificBicyclesFromDB,
  deleteSpecificBicyclesFromDB
};
