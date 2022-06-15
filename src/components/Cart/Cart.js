import { useState } from "react"
import { useCartContext } from "../../Context/CartContext"
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cartList, clearCart, removeItem, calcularTotal, cantidadItems, createOrder, orderId } = useCartContext()
  //const [vacio, setVacio] = useState(true)
  const [orderSent, setOrderSent] = useState(false)
  const [customerData, setCustomerData] = useState({})
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [email2Error, setEmail2Error] = useState(false);

  function sendOrderManage(customerData) {
    setOrderSent(true);
    createOrder(customerData);
  }

  function changeHandler(e) {
    setCustomerData({
      ...customerData,
      [e.target.name]: e.target.value
    });
  }

  function dataManage() {
    setNameError(!customerData.name);
    setPhoneError(!customerData.phone);
    setEmailError(!customerData.email);
    setEmail2Error(!(customerData.email2 === customerData.email));
    if (customerData.name && customerData.phone && customerData.email && (customerData.email2 === customerData.email)) {
      sendOrderManage(customerData);
    }
  }

  if (cantidadItems() === 0) {
    return (
      <div>
        {orderSent ? <h1>Pedido enviado! Nro de pedido: {orderId}</h1> : <h1>El pedido está vacío</h1>}

        <Link to='/' >
          <button
            className="color-botonAdd button button-primary" style={{ marginLeft: '18px' }}
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
          {"Total: $" + calcularTotal()}
        </div>

        <p>Ingrese sus datos para enviar el pedido:</p>
        <form action="">
          <input name="name" onChange={(e) => changeHandler(e)} type="text" placeholder="Nombre" />
          {nameError && <span>Debe ingresar un nombre</span>}
          <br />
          <input name="phone" onChange={(e) => changeHandler(e)} type="tel" placeholder="Teléfono" />
          {phoneError && <span>Debe ingresar un teléfono</span>}
          <br />
          <input name="email" onChange={(e) => changeHandler(e)} type="email" placeholder="Correo eléctronico" />
          {emailError && <span>Debe ingresar un correo electrónico</span>}
          <br />
          <input name="email2" onChange={(e) => changeHandler(e)} type="email" placeholder="Repita correo electrónico" />
          {email2Error && <span>El correo electrónico no coincide</span>}
          <br />
          <textarea name="comment" onChange={(e) => changeHandler(e)} id="" cols="30" rows="10"></textarea>
        </form>
        <button onClick={clearCart}>Vaciar carrito</button>
        <button onClick={dataManage}>Enviar pedido</button>

      </div>
    )
  }
}

export default Cart