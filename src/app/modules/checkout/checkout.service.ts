import { TOrder } from './checkout.interface'
import OrderModel from './checkout.model'

// Service to add a new item to the cart in the database
const createOrderIntoDB = async (payload: TOrder) => {
  const existingProduct = await OrderModel.findOne({ name: payload.name })

  if (existingProduct) {
    throw new Error('Order is already created.')
  }
  const result = await OrderModel.create(payload)
  return result
}

const getAllOrdersFromDB = async () => {
  const result = await OrderModel.find()
  return result
}
export const OrderServices = { createOrderIntoDB, getAllOrdersFromDB }
