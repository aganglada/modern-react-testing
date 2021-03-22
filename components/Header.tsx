import * as React from 'react'
import { FiShoppingCart } from 'react-icons/fi'

export const Header = () => {
  return (
    <header className="text-center shadow-md">
      <h1 className="flex justify-center items-center text-2xl font-semibold text-purple-800 p-5">
        <FiShoppingCart className="mr-2" />
        Shopping
      </h1>
    </header>
  )
}
