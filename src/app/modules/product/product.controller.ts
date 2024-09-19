import { RequestHandler } from 'express'
import { ProductServices } from './product.service'

const createProduct: RequestHandler = async (req, res) => {
  try {
    const newProduct = req.body
    console.log('This is request', newProduct)
    const result = await ProductServices.createProductIntoDB(newProduct)

    res.status(200).json({
      success: true,
      message: 'Product created successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

const getAllProducts: RequestHandler = async (req, res) => {
  try {
    const result = await ProductServices.getAllProductsFromDB()

    res.status(200).json({
      success: true,
      message: 'All Products retrieve successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

const getSingleProduct: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params
    const result = await ProductServices.getSingleProductFromDB(id)
    res.status(200).json({
      success: true,
      message: 'Single Product retrieve successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
}
