import { Schema, model, Model } from 'mongoose';
import { Bicycle } from './bicycle.interface';

const bicycleSchema = new Schema<Bicycle, BicycleModel, BicycleMethods>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    brand: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    type: {
      type: String,
      enum: {
        values: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
        message:
          'Type field can be one of the following: "Mountain", "Road", "Hybrid", "BMX", "Electric"',
      },
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
    },
    inStock: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    strict: 'throw',
  },
);

export type BicycleMethods = {
  // eslint-disable-next-line no-unused-vars
  updateInventory(quantity: number): Promise<Bicycle | void>;
};

export type BicycleModel = Model<
  Bicycle,
  Record<string, never>,
  BicycleMethods
>;

bicycleSchema.methods.updateInventory = async function (quantity: number) {
  if (this.quantity < quantity) {
    throw new Error('Insufficient stock for this product.');
  }
  this.quantity -= quantity;
  this.inStock = this.quantity > 0;
  await this.save();
};

export const BicycleModel = model<Bicycle, BicycleModel>(
  'Bicycle',
  bicycleSchema,
);
