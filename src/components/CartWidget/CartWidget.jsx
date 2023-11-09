import React from 'react'
import cart from './assets/shopping-cart.png'
import "./CartWidget.css"

export const CartWidget = () => {
  return (
    <div className='container'>
        <img className='img-cart' src={cart} alt="cart" />
        <span>0</span>
    </div>
  )
}
