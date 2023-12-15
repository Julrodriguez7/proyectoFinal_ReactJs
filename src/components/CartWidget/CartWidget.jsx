import React, { useContext } from 'react'
import cart from './assets/shopping-cart.png'
import "./CartWidget.css"
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext);

    return (
        <Link to='/cart' className='container'>
            <img className='img-cart' src={cart} alt="cart" />
            <span>
            { totalQuantity() }
            </span>
        </Link>
    )
}
