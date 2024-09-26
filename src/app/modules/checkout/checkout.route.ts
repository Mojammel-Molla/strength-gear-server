import express from 'express'
import { OrderControllers } from './checkout.controller'

const router = express.Router()

// Cart Routes
router.post('/order', OrderControllers.CreateOrder)
router.get('/orders', OrderControllers.getAllOrders)

export const CheckOutRoutes = router
