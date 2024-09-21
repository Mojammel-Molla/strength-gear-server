import { Request, Response } from 'express'
import { CartServices } from './cart.service'

const addToCart = async (req: Request, res: Response) => {
  try {
    const cartItemData = req.body
    console.log('This is cart data', cartItemData)
    const result = await CartServices.addToCartInDB(cartItemData)
    return res.status(200).json({
      success: true,
      message: 'Item added to cart successfully',
      data: result,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to add item to cart',
      error: error,
    })
  }
}

const getCartItems = async (req: Request, res: Response) => {
  try {
    const result = await CartServices.getAllCartItemsFromDB()
    return res.status(200).json({
      success: true,
      message: 'Cart items fetched successfully',
      data: result,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch cart items',
      error: error,
    })
  }
}

const updateCartItemQuantity = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { quantity } = req.body
    const result = await CartServices.updateCartItemInDB(id, quantity)
    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'Cart item not found',
      })
    }
    return res.status(200).json({
      success: true,
      message: 'Cart item quantity updated successfully',
      data: result,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to update cart item quantity',
      error: error,
    })
  }
}

const removeCartItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await CartServices.removeCartItemFromDB(id)
    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'Cart item not found',
      })
    }
    return res.status(200).json({
      success: true,
      message: 'Cart item removed successfully',
      data: result,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to remove cart item',
      error: error,
    })
  }
}

export const CartControllers = {
  addToCart,
  updateCartItemQuantity,
  removeCartItem,
  getCartItems,
}
