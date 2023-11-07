import React from 'react'
import cart from './assets/shopping-cart.png'

export const CartWidget = () => {
  return (
    <div>
        <img src={cart} alt="cart" />
        0
    </div>
  )
}
