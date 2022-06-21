import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
// import { getFetch } from "../Item/getFetch";
import { useParams } from "react-router-dom";
import '../EstiloLoader/estiloLoader.css';
import { doc, getDoc, getFirestore } from "firebase/firestore";


const ItemDetailContainer = ({ idProducto }) => {
    const [productoDetail, setProducto] = useState({})
    const [loading, setLoading] = useState(true)

    const { id } = useParams()
    // useEffect(() => {
    //     getFetch(id)
    //         .then(respuesta => setProducto(respuesta))
    //         .catch((err) => console.log(err))
    //         .finally(()=>setLoading(false)) 
    // }, [id]);


    useEffect(() => {
        const db = getFirestore();

        const producto = doc(db, "items", id);
        getDoc(producto).then((snapshot) => {
            if (snapshot.exists()) {
                setProducto({ id: snapshot.id, ...snapshot.data() });
                setLoading(false);
            }
        });
    }, [id]); 



    return (
        <div style={{ minHeight: '100vh'}}>
            {loading ?
                // <h3 style={{ textAlign: 'center', color: 'rgb(134, 111, 83)', fontFamily: 'Arial' }}>Cargando...</h3>
                <h3 style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }} className="loader">
                </h3>
                :
                <ItemDetail item={productoDetail} />
            }
        </div>
    )
}

export default ItemDetailContainer 