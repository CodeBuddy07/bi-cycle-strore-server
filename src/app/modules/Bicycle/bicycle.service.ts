import { Bicycle } from "./bicycle.interface";
import { BicycleModel } from "./bicycle.model";


const createBicycleIntoDB = async (  bicycle: Bicycle) => {

    const result = await BicycleModel.create(bicycle);
    return result;
};

export const BicycleServices = {
    createBicycleIntoDB
}