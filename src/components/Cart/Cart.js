import { useCartContext } from "../../Context/CartContext"
import CartMessage from "../CartMessage/CartMessage";
import CartList from "../CartList/CartList";
import CartCheckoutForm from "../CartCheckoutForm/CartCheckoutForm";
//import '../Cart/CartEstilos.css'


const Cart = () => {
  const { cantidadItems } = useCartContext()
 
  if (cantidadItems() === 0) {
    return (
      <div className="fondoCart text-center container" style={{ minHeight: '100vh'}}>
        <CartMessage />
      </div>
    )
  }
  else {
    return (      
      <div className="container fondoCart ">
      <CartList />
      <CartCheckoutForm />
      </div>
    )
  }
}

export default Cart