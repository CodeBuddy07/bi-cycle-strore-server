import { Query } from "mongoose";
import { Bicycle } from "./bicycle.interface";
import { BicycleModel } from "./bicycle.model";


const createBicycleIntoDB = async (  bicycle: Bicycle) => {

    const result = await BicycleModel.create(bicycle);
    return result;
};

const getAllBicyclesFromDB = async ( searchTerm: string, value: string) => {

    const result = await BicycleModel.find(searchTerm? {[searchTerm]: value} : {});
    return result;
};

export const BicycleServices = {
    createBicycleIntoDB,
    getAllBicyclesFromDB
}