import { TCart } from './cart.interface'
import CartModel from './cart.model'

// Service to create a new cart item in the database
const addProductToCart = async (payload: TCart) => {
  const result = await CartModel.create(payload)
  return result
}

// Service to get all cart items from the database
const getAllCartItemsFromDB = async () => {
  const result = await CartModel.find()
  return result
}

// Service to get a single cart item by its ID from the database
const getSingleCartItemFromDB = async (id: string) => {
  const result = await CartModel.findOne({ _id: id })
  return result
}

// Service to remove a cart item by its ID
const removeCartItemFromDB = async (id: string) => {
  const result = await CartModel.findByIdAndDelete(id)
  return result
}

// Service to update the quantity or details of a cart item by its ID
const updateCartItemInDB = async (id: string, updatedData: Partial<TCart>) => {
  const result = await CartModel.findByIdAndUpdate(id, updatedData, {
    new: true, // Return the updated document
  })
  return result
}

// Exporting all cart services
export const CartServices = {
  addProductToCart,
  getAllCartItemsFromDB,
  getSingleCartItemFromDB,
  removeCartItemFromDB,
  updateCartItemInDB,
}
