import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.css'

export const ItemDetail = ({ id, name, price, category, img, stock, description }) => {
  return (
    <div className='container-detail'>
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
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada: ', quantity)} />
            </div>  
        </section>
    </div>
  )
}
