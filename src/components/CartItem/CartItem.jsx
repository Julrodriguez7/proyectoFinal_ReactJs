import React, { useContext } from 'react'
import './CartItem.css'
import deleteIcon from './assets/delete.png'
import { CartContext } from '../../context/CartContext'

export const CartItem = ({ id, name, price, img, quantity }) => {

    const { removeItem } = useContext(CartContext)

    return (
        <div className='cart-item'>

            <div className='section-producto'>
                <img src={img} alt={name} className='img-item-cart' />
                <div>
                    <h3 className='title-cart'>{name}</h3>
                    <p className='quantity-cart'>Cantidad: {quantity}</p>
                </div>
            </div>


            <div className='section-subtotal'>
                <div>
                    <p className='price-cart'>SUBTOTAL: $ {new Intl.NumberFormat().format(price * quantity)}</p>
                </div>

                <div>
                    <img src={deleteIcon} alt="button-delete" onClick={() => removeItem(id)} className='btn-delete' />
                </div>
            </div>

        </div>
    )
}
