import React, { useContext } from 'react'
import './Cart.css'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import { CartItem } from '../CartItem/CartItem';

export const Cart = () => {

    const { cart, clearCart, totalQuantity, totalPrice } = useContext(CartContext);

    if(totalQuantity() === 0) {
        return (
            <div className='container-empty-cart'>
                <h2 className='title-empty-cart'>EL CARRITO ESTÁ VACÍO.</h2>
                <Link className='btn' to='/'>Volver al inicio</Link>
            </div>
        )
    }

    return (
        <div>
            <h2 className='title'>CARRITO DE COMPRAS</h2>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${totalPrice()}</h3>
            <button onClick={() => clearCart()}>Limpiar carrito</button>
            <Link to='/checkout'>Checkout</Link>
        </div>
    )
}
