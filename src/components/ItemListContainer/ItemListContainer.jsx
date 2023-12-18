import React, { useEffect, useState } from "react"
import './ItemListContainer.css'
import banner from './assets/banner.jpg'
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

export const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);

    const {categoryId} = useParams();

    useEffect(()=>{

        const collectionRef = categoryId 
            ? query(collection(db, 'products'), where('category', '==', categoryId)) 
            : collection(db, 'products')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(productsAdapted)
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