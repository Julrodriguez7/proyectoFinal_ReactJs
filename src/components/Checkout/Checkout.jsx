import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext";
import { Loader } from "../Loader/Loader";
import { CheckoutForm } from "../CheckoutForm/CheckoutForm";
import { Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch } from "@firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import './Checkout.css'
import { Link } from "react-router-dom";


export const Checkout = () => {

    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');

    const { cart, totalPrice, clearCart } = useContext(CartContext);

    const createOrder = async ({ firstName, lastName, phone, email }) => {

        setLoading(true)

        try {
            const objOrder = {
                client: {
                    firstName, lastName, phone, email
                },
                items: cart,
                total: totalPrice(),
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)

                clearCart()
            } else {
                console.error('Productos fuera de stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <Loader />
    }

    if (orderId) {
        return (
            <div className="container-order">
                <div className="container-order-id">
                    <p className="order-id">El id de su orden es: <span>{orderId}</span></p>
                    <div className="container-text-order">
                        <p>Por favor guarde el código de la orden.</p>
                        <p>A la brevedad nos contactaremos por correo.</p>
                        <p className="text-3">¡Muchas gracias por generar su compra!</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className='container-btn-back'>
            <Link to={-1} className='btn-back'> ◀ VOLVER</Link>
            </div>            
            <div className="container-checkout">
                <div>
                    <div className="title-form-buy">
                        <h2>DATOS DE CONTACTO</h2>
                    </div>

                    <CheckoutForm onConfirm={createOrder} />
                </div>

                <div className="detail-buy">
                    <div className="title-detail-buy">
                        <h2>MI COMPRA</h2>
                    </div>
                    <div className="container-detail-buy">
                        <div className="main-detail-buy">
                            {
                                cart.map((item) => {
                                    return (
                                        <div key={item.id} className="item-buy">
                                            <div>
                                                <div className="item-detail-buy">
                                                    <img src={item.img} alt={item.name} className="img-checkout" />
                                                    <div>
                                                        <h3>{item.name}</h3>
                                                        <p>X {item.quantity}</p>
                                                        <p className="price-unit">PRECIO UNIT.: $ {new Intl.NumberFormat().format(item.price)}</p>
                                                    </div>
                                                </div>
                                                <div className="subtotal-buy">
                                                    <p>SUBTOTAL: $ {new Intl.NumberFormat().format(item.quantity * item.price)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })

                            }
                        </div>
                        <div className="footer-detail-buy">
                            <p>TOTAL</p>
                            <span>$ {new Intl.NumberFormat().format(totalPrice())}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
