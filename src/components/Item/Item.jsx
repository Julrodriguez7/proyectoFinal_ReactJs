import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

export const Item = ({id, name, price, img, stock}) => {
  return (
    <div className='card'>
        <img src={img} alt={name} />
        <h3 className='title-card'>{name}</h3>
        <p className='price-card'>${price}</p>
        <p>Stock: {stock}</p>
    
        <Link className='link-detail' to={`/item/${id}`}><div className='conteiner-detail'>VER DETALLE</div></Link>
        
    </div>
  )
}