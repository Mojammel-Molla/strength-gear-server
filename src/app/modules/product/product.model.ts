import { Schema, model } from 'mongoose'
import { TProduct } from './product.interface'

const productSchema = new Schema<TProduct>(
  {
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
    description: {
      type: String,
      required: [true, 'Product description is required'],
    },
    inStock: {
      type: Boolean,
      default: true,
      required: [true, 'Stock availability is required'],
    },
  },
  {
    timestamps: true,
  }
)

// Create and export the Product model
const ProductModel = model<TProduct>('Product', productSchema)

export default ProductModel
