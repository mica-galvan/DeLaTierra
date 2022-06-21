import { useState } from "react"
import { useCartContext } from "../../Context/CartContext"
import {Button} from 'react-bootstrap'
import '../CartCheckoutForm/CartEstilos.css'
//import '../Cart/CartEstilos.css'

const CartCheckoutForm = () => {
  const { clearCart, createOrder } = useCartContext()
  const [customerData, setCustomerData] = useState({})
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [email2Error, setEmail2Error] = useState(false);

  function sendOrderManage(customerData) {
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

  return (
    <div className="container text-center">
<form className="cartForm container text-center" action="">
         <p className="text-muted  container text-left  mb-4">CHECKOUT:</p> 
          <input className="mb-2 container " name="name" onChange={(e) => changeHandler(e)} type="text" placeholder="Nombre"  />
          {nameError && <span  className="text-danger msj-error ">Los datos no son válidos</span>}
          
          <input className="mb-2 container " name="phone" onChange={(e) => changeHandler(e)} type="tel" placeholder="Teléfono" />
          {phoneError && <span  className="text-danger msj-error "> Los datos no son válidos </span>}
          
          <input className="mb-2 container " name="email" onChange={(e) => changeHandler(e)} type="email" placeholder="Correo eléctronico" />
          {emailError && <span  className="text-danger msj-error "> Los datos no son válidos</span>}
         
          <input className="mb-2 container  " name="email2" onChange={(e) => changeHandler(e)} type="email" placeholder="Confirme correo electrónico" />
          {email2Error && <span className="text-danger msj-error mb-3 ">El correo electrónico no coincide</span>}
          
          <textarea placeholder="Comentarios" className="mb-2 container  " name="comment" onChange={(e) => changeHandler(e)} id="" cols="30" rows="10"></textarea>
        </form> 
      
        <Button className="boton-txt container text-center" onClick={clearCart}>Vaciar carrito</Button>
        <Button className="boton-txt container text-center" onClick={dataManage}>Enviar pedido</Button>
    </div>
  )
}

export default CartCheckoutForm