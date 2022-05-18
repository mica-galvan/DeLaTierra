import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFetch } from "../Item/getFetch";


const ItemDetailContainer = ({ idProducto = '1' }) => {
    const [productoDetail, setProducto] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch(idProducto)
            .then(respuesta => setProducto(respuesta))
            .catch((err) => console.log(err))
            .finally(()=>setLoading(false)) 
    }, [idProducto]);



    return (
        <div>
            { loading ? 
            <h3 style={{ textAlign: 'center', color: 'rgb(134, 111, 83)', fontFamily: 'Arial' }}>Cargando...</h3>
                : 
                <ItemDetail item={productoDetail} />
            }
        </div>
    )
}

export default ItemDetailContainer 