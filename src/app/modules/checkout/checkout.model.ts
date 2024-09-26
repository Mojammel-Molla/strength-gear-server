import mongoose, { Schema } from 'mongoose'
import { TOrder } from './checkout.interface'

// Create the order schema
const OrderSchema = new Schema<TOrder>(
  {
    address: {
      type: String,
      required: [true, 'Address is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    paymentMethod: {
      type: String,
      required: [true, 'Payment method is required'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
    },
    totalAmount: {
      type: Number,
      required: [true, 'Total amount is required'],
    },
  },
  { timestamps: true }
)

// Create the model
const OrderModel = mongoose.model<TOrder>('Order', OrderSchema)

export default OrderModel
