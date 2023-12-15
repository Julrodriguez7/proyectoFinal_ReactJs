import React, { useContext, useState } from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export const ItemDetail = ({ id, name, price, category, img, stock, description }) => {
    
    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        const item = {
            id, 
            name, 
            price, 
            img
        }

        addItem(item, quantity)
    } 

    return (
        <div className='container-detail'>
            <Link to='/'> ⬅ VOLVER</Link>
            <section className='section-left'>
                <img src={img} alt={name} />
            </section>
            <section className='section-right'>
                <h2 className='title-detail'>{name}</h2>
                <div>
                    <p className='price-detail'>${price}</p>
                    <p>Stock disponible: {stock}</p>
                </div>
                <p className='category-detail'>Categoria: {category}</p>
                <div className='description-detail'>
                    <h3>DESCRIPCIÓN</h3>
                    <p>{description}</p>
                </div>
                <div className='count-detail'>
                    {
                        quantityAdded > 0 ? (
                            <Link to='/cart' className='btn-buy-count'>TERMINAR COMPRA</Link>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                        )
                    }
                </div>  
            </section>
        </div>
    )
}
