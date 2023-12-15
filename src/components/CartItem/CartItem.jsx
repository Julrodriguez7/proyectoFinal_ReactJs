import React, { useContext } from 'react'
import './CartItem.css'
import { CartContext } from '../../context/CartContext'

export const CartItem = ({ id, name, price, img, quantity }) => {

    const { removeItem } = useContext(CartContext)

    return (
        <div className='cart-item'>
            <div className='section-producto'>
                <img src={img} alt={name} className='img-item-cart'/>
                <div>
                    <h3 className='title-cart'>{name}</h3>
                    <p className='quantity-cart'>Cantidad: {quantity}</p>
                </div>
            </div>
            <div className='section-subtotal'>
                <p className='price-cart'>SUBTOTAL: ${price * quantity}</p>
            </div>
            <div>
            <button onClick={() => removeItem(id)}>X</button>
            </div>
    
        </div>
    )
}
