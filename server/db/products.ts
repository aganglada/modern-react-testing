import { v4 } from 'uuid'
import { Product } from '../../types/product'

const products = new Map<string, Product>()

products.set(v4(), {
  name: 'T-Shirt',
  image: '',
  price: 10,
  stock: 3,
})

products.set(v4(), {
  name: 'Pants',
  image: '',
  price: 15,
  stock: 5,
})

export function all() {
  const json = {}

  products.forEach((value, key) => {
    json[key] = value
  })

  return json
}
