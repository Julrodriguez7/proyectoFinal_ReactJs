import React, { useEffect, useState } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import { Loader } from '../Loader/Loader'

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const { itemId } = useParams();

    useEffect(() => {

        setLoading(true)

        const docRef = doc(db, 'products', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productsAdapted = { id: response.id, ...data }
                setProduct(productsAdapted)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setTimeout(() => {
                    setLoading(false)
                }, 1000);
            })

    }, [itemId])

    if (loading) {
        return <Loader />
    }

    return (
        <div>
            <ItemDetail {...product} />
        </div>
    )
}
