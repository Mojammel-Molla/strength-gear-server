import { Request, Response } from 'express'
import { OrderServices } from './checkout.service'

const CreateOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body
    console.log('This is cart data', orderData)
    const result = await OrderServices.createOrderIntoDB(orderData)
    return res.status(200).json({
      success: true,
      message: 'Order created successfully',
      data: result,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to create order',
      error: error,
    })
  }
}

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getAllOrdersFromDB()
    return res.status(200).json({
      success: true,
      message: 'Order items fetched successfully',
      data: result,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch order items',
      error: error,
    })
  }
}

export const OrderControllers = {
  CreateOrder,
  getAllOrders,
}
