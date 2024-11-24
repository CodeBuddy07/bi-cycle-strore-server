import { model, Schema, connect } from 'mongoose';
import { Order } from './order.interface';
import validator from 'validator';


const orderSchema = new Schema<Order>(
  {
    email: {
      type: String,
      required: true,
      validate:{
        validator: function(v) {
          return validator.isEmail(v);
        },
        message: props => `${props.value} is not a valid email!`
      }
    },
    product: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
    },
    totalPrice: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    strict: "throw",
  },
);


export const OrderModel = model<Order>('Order', orderSchema);