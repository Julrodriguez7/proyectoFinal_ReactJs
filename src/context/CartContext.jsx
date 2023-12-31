import { createContext, useState, useEffect } from "react";


export const CartContext = createContext({
    cart: []
})

const cartInit = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(cartInit);

    const addItem = (item, quantity) => {

        const newCart = [...cart];

        const isInCart = newCart.find((prod) => prod.id === item.id)

        if(isInCart) {
            isInCart.quantity += quantity;
            setCart(newCart);
        } else {
            newCart.push( {...item, quantity} );
            setCart(newCart);
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const totalQuantity = () => {

        return cart.reduce((accumulator, el) => accumulator + el.quantity, 0);

    } 

    const totalPrice = () => {

        return cart.reduce((accumulator, el) => (accumulator + (el.price * el.quantity)), 0);

    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])
    

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}