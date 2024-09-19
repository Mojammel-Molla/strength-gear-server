import express, { Request, Response } from 'express'
import { ProductRoutes } from './app/modules/product/product.route'
const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Strength Gear!')
})
app.use('/api', ProductRoutes)

export default app
