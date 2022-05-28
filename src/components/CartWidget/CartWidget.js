import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const CartWidget = () => {
  return (
   // <div>CartWidget</div>
   <Link to='/Cart'>
  <BsFillCartFill style={{color:'rgb(250, 189, 59)'}}/>
  </Link>
   
  )
}

export default CartWidget