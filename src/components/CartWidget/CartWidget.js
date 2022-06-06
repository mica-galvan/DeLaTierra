import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext"

const CartWidget = () => {
  const { cantidadItems } = useCartContext()

if(cantidadItems()>0)
{
  return (
   // <div>CartWidget</div>
   
   <Link to='/Cart' style={{textDecoration: 'none'}}>
     {/* <div style={{opacity: cantidadItems()==0 ? '0' : '1'}}>       */}
     <div>
  <span><BsFillCartFill style={{color:'rgb(250, 189, 59)'}}/></span>
  <span >{ cantidadItems() }</span>
  </div>
  </Link>
   
  )
}
}

export default CartWidget