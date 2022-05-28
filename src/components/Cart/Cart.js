import { useCartContext } from "../../Context/CartContext"


const Cart = () => {
  const { cartList, clearCart, removeItem } = useCartContext()
  

  return (
    <div>
            
      {cartList.map(producto => 
      <div key={producto.id}>
      <li>
        <img src={producto.foto} alt="miniatura" style={{ marginLeft: '50px', display: 'block', height: '75px' }}></img>
        {producto.nombre} - Precio: {producto.precio} - cantidad: {producto.cantidad}
        <button className="btn btn-outline-primary" onClick={() => removeItem(producto.id)}> X </button>
        </li>

      </div>
       )}
      <button onClick={clearCart}>Vaciar carrito</button>

           
    </div>
  )
}

export default Cart
