import { Schema, model, connect } from 'mongoose';
import { Bicycle } from './bicycle.interface';

const bicycleSchema = new Schema<Bicycle>({
    name: {
        type: String,
        required: true,
        trim: true,
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
        enum: ["Mountain", "Road", "Hybrid", "BMX", "Electric"],
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
  });

  export const BicycleModel = model<Bicycle>('Bicycle', bicycleSchema);