import React, { useContext, useState } from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.css'
import shop from './assets/store.png'
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

            <div className='header-detail'>
                <Link to={-1} className='btn-back-detail'> ◀ VOLVER</Link>
                <p className='category-detail'>Categoría: {category}</p>
            </div>

            <section className='section-container'>
                <div>
                    <img src={img} alt={name} className='img-detail' />
                </div>
                <div>
                    <h2 className='title-detail'>{name}</h2>

                    <div className='price-detail'>
                        <h3>$ {price}</h3>
                        <p>Stock disponible: {stock}</p>
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

                    <div className='description-detail'>
                        <h3>DESCRIPCIÓN</h3>
                        <p>{description}</p>
                    </div>

                    <div className='shipment-container'>
                        <div className='shipment-title'>
                            <img src={shop} alt="shop" className='img-shop' />
                            <h3>RETIRA POR NUESTRO LOCAL</h3>
                        </div>

                        <div className='shipment-addres'>
                            <p>Calle Falsa 123 - Río Segundo, Córdoba -</p>
                            <p>Atención de lunes a viernes de 9 a 18 hs.</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
