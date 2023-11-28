import React, { useState } from 'react'
import './ItemCount.css'

export const ItemCount = ({stock, initial, onAdd}) => {
    
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className='counter'>
            <div className='controls'>
                <button className='btn-count' onClick={increment}>➕</button>
                <h4 className='count'>{quantity}</h4>
                <button className='btn-count' onClick={decrement}>➖</button>
            </div>
            <div>
                <button className='btn-add-cart' onClick={() => onAdd(quantity)} disabled={!stock}>AGREAR A CARRITO</button>
            </div>
        </div>
    )
}
