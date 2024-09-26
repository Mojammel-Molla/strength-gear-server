import { TCart } from './cart.interface'
import { CartModel } from './cart.model'

// Service to add a new item to the cart in the database
const addToCartInDB = async (payload: TCart) => {
  const existingProduct = await CartModel.findOne({ name: payload.name })

  if (existingProduct) {
    throw new Error('Product with this name already exists')
  }
  const result = await CartModel.create(payload)
  return result
}

// Service to get all items from the cart in the database
const getAllCartItemsFromDB = async () => {
  const result = await CartModel.find()
  return result
}

// Service to get a single cart item by its ID from the database
const getSingleCartItemFromDB = async (id: string) => {
  const result = await CartModel.findOne({ _id: id })
  return result
}

// Service to update a cart item by its ID
const updateCartItemInDB = async (id: string, updatedData: Partial<TCart>) => {
  const result = await CartModel.findByIdAndUpdate(id, updatedData, {
    new: true, // Return the updated document
  })
  return result
}

// Service to remove an item from the cart by its ID
const removeCartItemFromDB = async (id: string) => {
  const result = await CartModel.findByIdAndDelete(id)
  return result
}

// Exporting all cart services
export const CartServices = {
  addToCartInDB,
  getAllCartItemsFromDB,
  getSingleCartItemFromDB,
  updateCartItemInDB,
  removeCartItemFromDB,
}
