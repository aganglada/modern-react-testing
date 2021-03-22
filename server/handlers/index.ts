import { rest } from 'msw'
import { allProductsHandler } from './products'

export const handlers = [rest.get('/api/products', allProductsHandler)]
