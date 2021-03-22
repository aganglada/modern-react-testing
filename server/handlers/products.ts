import * as productsDB from '../db/products'

export const allProductsHandler = (_, res, ctx) => {
  return res(
    ctx.json({
      products: productsDB.all(),
    }),
  )
}
