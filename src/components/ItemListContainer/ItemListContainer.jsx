import React from "react"
import './ItemListContainer.css'
import banner from './assets/banner.jpg'

export const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <img className="banner" src={banner} alt="banner" />
            <h2 className="subtitle">{greeting}</h2>
        </div>
    )
}