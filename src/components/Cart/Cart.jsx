import React, { useContext } from 'react'
import './Cart.css'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import { CartItem } from '../CartItem/CartItem';

export const Cart = () => {

    const { cart, clearCart, totalQuantity, totalPrice } = useContext(CartContext);

    if (totalQuantity() === 0) {
        return (
            <div className='container-empty-cart'>
                <h2 className='title-empty-cart'>EL CARRITO ESTÁ VACÍO.</h2>
                <div className='container-btn-back'>
                    <Link to={-1} className='btn-back'> ◀ VOLVER</Link>
                    <Link className='btn-back' to='/'>◀ VOLVER AL INICIO</Link>
                </div>
            </div>
        )
    }

    return (
        <div>
            <h2 className='title'>CARRITO DE COMPRAS</h2>
            <div className='container-cart'>
                <div className='items-cart'>
                    {cart.map(p => <CartItem key={p.id} {...p} />)}
                </div>

                <div className='total-cart'>
                    <p>Total: $ {new Intl.NumberFormat().format(totalPrice())}</p>
                </div>

                <div className='buttons-cart'>
                    <button onClick={() => clearCart()} className='btn-cart'>LIMPIAR CARRITO</button>
                    <Link to='/checkout' className='btn-cart'>COMPRAR</Link>
                </div>
            </div>
        </div>
    )
}
