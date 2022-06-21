import { useCartContext } from "../../Context/CartContext"
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import '../Cart/CartEstilos.css'

const CartMessage = () => {
    const { orderId } = useCartContext()

    return (

        <div>
            {orderId ? <h1 className="msj">¡El pedido fue realizado con éxito! Su número de orden es: {orderId}</h1 > : <h1 className="msj">El carrito de compras está vacío</h1>}
            <Link to='/' >
                <Button
                    className="boton-txt-continue msj " style={{ marginLeft: '18px' }}
                >Seguir comprando</Button>
            </Link>
        </div>
    )
}

export default CartMessage