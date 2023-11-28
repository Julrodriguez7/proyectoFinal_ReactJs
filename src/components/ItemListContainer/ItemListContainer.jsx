import React, { useEffect, useState } from "react"
import './ItemListContainer.css'
import banner from './assets/banner.jpg'
import { getProductsByCategory, getProducts } from "../../asyncMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams();

    useEffect(()=>{
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return (
        <div>
            <img className="banner" src={banner} alt="banner" />
            <h2 className="subtitle">{greeting}</h2>
            <ItemList products={products}/>
        </div>
    )
}