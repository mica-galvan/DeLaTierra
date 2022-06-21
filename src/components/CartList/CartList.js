import { useCartContext } from "../../Context/CartContext"
import { Table } from "react-bootstrap"
import '../Cart/CartEstilos.css'

const CartList = () => {
    const { cartList, removeItem, calcularTotal } = useCartContext()


    return (
        <div>
            <p className="text-muted container mb-4">RESUMEN DE COMPRA</p>

            <Table  >
                <thead className="thead-color">
                    <tr>
                        <th>Descripción</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {cartList.map(producto =>
                        <tr key={producto.id}>
                            {/* <div className="text-left align-items  text-muted " key={producto.id}> */}
                            <td><img className="miniatura " src={producto.foto} alt="miniatura" style={{ display: 'block' }}></img></td>
                            <td className="m-2 ml-3 text-dark">{producto.nombre}</td>
                            <td className="m-2 ml-3">{producto.precio}</td>
                            <td className="m-2 ml-3 text-center">{producto.cantidad}</td>
                            <td align="center"><button className="btn-eliminar p-1 ml-3 text-center" onClick={() => removeItem(producto.id)}>x</button></td>
                        </tr>
                    )}
                </tbody>
            </Table>

            <div className="container total mb-3 text-white text-center">
                {"Total: $" + calcularTotal()}
            </div>
        </div>
    )
}

export default CartList