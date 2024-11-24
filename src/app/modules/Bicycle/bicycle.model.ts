import { Schema, model, connect } from 'mongoose';
import { Bicycle } from './bicycle.interface';

const bicycleSchema = new Schema<Bicycle>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    brand: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 1,
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
      min: 1,
    },
    inStock: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false
  },
);

export const BicycleModel = model<Bicycle>('Bicycle', bicycleSchema);
