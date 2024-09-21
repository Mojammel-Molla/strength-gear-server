import { Request, Response } from 'express'
import { ProductServices } from './product.service'
const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body
    const result = await ProductServices.createProductIntoDB(productData)
    return res.status(201).json({
      success: true,
      message: 'Product created successfully',
      data: result,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to create product',
      error: error,
    })
  }
}

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsFromDB()
    return res.status(200).json({
      success: true,
      message: 'All products fetched successfully',
      data: result,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch products',
      error: error,
    })
  }
}

const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await ProductServices.getSingleProductFromDB(id)
    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      })
    }
    return res.status(200).json({
      success: true,
      message: 'Product fetched successfully',
      data: result,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch product',
      error: error,
    })
  }
}

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const productData = req.body
    const result = await ProductServices.updateProductInDB(id, productData)
    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      })
    }
    return res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      data: result,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to update product',
      error: error,
    })
  }
}

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await ProductServices.deleteProductFromDB(id)
    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      })
    }
    return res.status(200).json({
      success: true,
      message: 'Product deleted successfully',
      data: result,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to delete product',
      error: error,
    })
  }
}

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
}
