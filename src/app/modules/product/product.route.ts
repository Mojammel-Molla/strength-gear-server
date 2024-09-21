import express from 'express'
import { ProductControllers } from './product.controller'

const router = express.Router()

router.post('/products/create', ProductControllers.createProduct)
router.get('/products', ProductControllers.getAllProducts)
router.get('/products/:id', ProductControllers.getProductById)
router.put('/products/:id', ProductControllers.updateProduct)
router.delete('/products/:id', ProductControllers.deleteProduct)

export const ProductRoutes = router
