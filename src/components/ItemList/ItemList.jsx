import React from 'react'
import { Item } from '../Item/Item'
import './ItemList.css'

export const ItemList = ({products}) => {
  return (
    <div className='container-items'>
        {products.map(prod => <Item key={prod.id} {...prod}/>)}
    </div>
  )
}
