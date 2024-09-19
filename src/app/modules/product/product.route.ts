import express from 'express'
import { ProductControllers } from './product.controller'

const router = express.Router()

router.post('/products/create-product', ProductControllers.createProduct)
router.get('/products', ProductControllers.getAllProducts)
router.get('product/:id', ProductControllers.getSingleProduct)

export const ProductRoutes = router
