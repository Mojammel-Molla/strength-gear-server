import { TProduct } from './product.interface'
import ProductModel from './product.model'

// Service to create a new product in the database
const createProductIntoDB = async (payload: TProduct) => {
  const existingProduct = await ProductModel.findOne({ name: payload.name })

  if (existingProduct) {
    throw new Error('Product with this name already exists')
  }

  const result = await ProductModel.create(payload)
  return result
}

// Service to get all products from the database
const getAllProductsFromDB = async () => {
  const result = await ProductModel.find()
  return result
}

// Service to get a single product by its ID from the database
const getSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.findOne({ _id: id })
  return result
}

// Service to update a product by its ID
const updateProductInDB = async (
  id: string,
  updatedData: Partial<TProduct>
) => {
  const result = await ProductModel.findByIdAndUpdate(id, updatedData, {
    new: true, // Return the updated document
  })
  return result
}

// Service to delete a product by its ID
const deleteProductFromDB = async (id: string) => {
  const result = await ProductModel.findByIdAndDelete(id)
  return result
}

// Exporting all product services
export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductInDB,
  deleteProductFromDB,
}
