import { createContext, useContext, useState } from 'react'
import { collection, getDocs, getFirestore, query, where, writeBatch, documentId, addDoc } from "firebase/firestore";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


const CartContextProvider = ({ children }) => {
    // Estados y funciones globales
    const [cartList, setCartList] = useState([])
    //const [orderId, setOrderId] = useState({});
    const [orderId, setOrderId] = useState(null);
    const [prodStock, setProdStock] = useState({});

    function isInCart(id) {
        return cartList.some(prod => prod.id === id)
    }

    function addToCart(item) {
        setOrderId(null);

        if (isInCart(item.id)) {
            let producto = cartList.find(prod => prod.id === item.id);
            let productoEnStock = prodStock.find(prod => prod.id === item.id);

            const newCartList = cartList.filter(prod => prod.id !== item.id);

            if (productoEnStock.stock >= producto.cantidad + item.cantidad) {
                producto.cantidad += item.cantidad;
                setCartList([...newCartList, producto])
            }
            else {
                //se alcanzó el limite del stock para ese producto
            }
        }
        else {
            //setCartList([...cartList, item])
            let productoEnStock = prodStock.find(prod => prod.id === item.id);

            if (productoEnStock.stock >= item.cantidad) {
                //producto.cantidad += item.cantidad;
                setCartList([...cartList, item])
            }
            else {
                //se alcanzó el limite del stock para ese producto
            }
        }
    }

    function clearCart() {
        setCartList([]);
    }

    function removeItem(itemId) {
        setCartList(cartList.filter(prod => prod.id !== itemId));
    }

    function calcularTotal() {
        let total = cartList.reduce((a, b) => a += (b.cantidad * b.precioNumerico), 0)
        return total
    }

    function cantidadItems() {
        if (!cartList) {
            setCartList([])
            return 0
        }
        else {
            let cantidad = cartList.reduce((a, b) => a += b.cantidad, 0)
            return cantidad
        }
    }

    function createOrder(customerData) {
        let order = {};

        order.customerData = customerData;
        order.fecha = new Date();
        order.total = calcularTotal();
        order.items = cartList.map(item => {
            const id = item.id;
            const nombre = item.nombre;
            const cantidad = item.cantidad;
            const stockActualizado = item.stock - item.cantidad;
            const precio = item.precioNumerico * item.cantidad;
            return { id, nombre, cantidad, stockActualizado, precio }
        });

        async function updateStocks() {
            const queryCollectionStocks = collection(db, 'items');
            const queryUpdateStocks = query(queryCollectionStocks, where(documentId(), 'in', cartList.map(item => item.id)));
            const batch = writeBatch(db);

            await getDocs(queryUpdateStocks)
                .then(resp => resp.docs.forEach(
                    res => batch.update(res.ref, { stock: order.items.find(item => item.id === res.id).stockActualizado })
                ))
                .catch(err => console.log(err))

            batch.commit()
        }

        const db = getFirestore();
        const queryCollectionOrders = collection(db, 'orders');
        addDoc(queryCollectionOrders, order)
            .then(resp => setOrderId(resp.id))
            .then(() => updateStocks())
            .catch(err => console.log(err))
            .finally(() => clearCart())
    };

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            clearCart,
            isInCart,
            removeItem,
            calcularTotal,
            cantidadItems,
            createOrder,
            orderId,
            setProdStock
        }} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider