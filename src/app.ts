import express, { Application, Request, Response } from 'express'
import { ProductRoutes } from './app/modules/product/product.route'
import { CartRoutes } from './app/modules/cart/cart.route'
import cors from 'cors'

const app: Application = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Strength Gear!')
})

app.use(cors())

app.use(express.json())
app.use('/api', ProductRoutes)
app.use('/api', CartRoutes)

export default app
