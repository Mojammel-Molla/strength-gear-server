import { TCart } from './cart.interface'
import { Schema, model } from 'mongoose'

// Define the cart schema
const cartSchema = new Schema<TCart>(
  {
    id: {
      type: String,
      required: [true, 'Product ID is required'],
    },
    name: {
      type: String,
      required: [true, 'Product name is required'],
    },
    price: {
      type: Number,
      required: [true, 'Product price is required'],
    },
    imageUrl: {
      type: String,
      required: [true, 'Product image URL is required'],
    },
    category: {
      type: String,
      required: [true, 'Product category is required'],
    },
    description: {
      type: String,
      required: [true, 'Product description is required'],
    },
    inStock: {
      type: Boolean,
      required: [true, 'Stock availability is required'],
    },
  },
  {
    timestamps: true,
  }
)

// Create and export the Cart model
export const CartModel = model<TCart>('Cart', cartSchema)
