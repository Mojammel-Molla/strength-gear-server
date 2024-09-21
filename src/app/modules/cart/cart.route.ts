import express from 'express'
import { CartControllers } from './cart.controller'

const router = express.Router()

// Cart Routes
router.post('/cart', CartControllers.addToCart)
router.get('/cart', CartControllers.getCartItems)
router.put('/cart/:id', CartControllers.updateCartItemQuantity)
router.delete('/cart/:id', CartControllers.removeCartItem)

export const CartRoutes = router
