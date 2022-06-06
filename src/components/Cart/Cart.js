import { useCartContext } from "../../Context/CartContext"
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cartList, clearCart, removeItem, calcularTotal, cantidadItems } = useCartContext()
  //const [vacio, setVacio] = useState(true)


  if(cantidadItems() === 0) {
    return (
      <div>
    <h3>Carrito vacío</h3>
    <Link to='/' >
                <button
                    className="color-botonAdd button button-primary" style={{ marginLeft: '18px' }}
                    //onClick={() => console.log('ir al home')}
                >Seguir comprando</button>
            </Link>
        </div>
      )
  }
  else {
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
           <div>
             { "Total: $" + calcularTotal() }
          </div>
          <button onClick={clearCart}>Vaciar carrito</button> 
    
        </div>
      )
  }


}

export default Cart
