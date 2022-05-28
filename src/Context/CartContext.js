import { createContext, useContext, useState } from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


const CartContextProvider = ({ children }) => {
    // Estados y funciones globales
    const [cartList, setCartList] = useState([])

    function isInCart(id) {
        return cartList.some(prod => prod.id === id)
    }

    function addToCart(item) {
        if (isInCart(item.id)) {
            let producto = cartList.find(prod => prod.id === item.id);
            producto.cantidad += item.cantidad;
        }
        else {
            setCartList([...cartList, item])
        }
    }

    function clearCart() {
        setCartList([]);
    }

    function removeItem(itemId) {     
        setCartList(cartList.filter(prod => prod.id !== itemId));
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            clearCart,
            isInCart,
            removeItem
        }} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider