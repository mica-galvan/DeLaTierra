import { useEffect } from 'react'
import { collection, getDocs, getFirestore, query, where, documentId } from "firebase/firestore";
import ItemCount from '../ItemList/ItemCount'
import { useCartContext } from "../../Context/CartContext"

export default function ItemDetail({ item }) {
    const { prodStock, setProdStock } = useCartContext()

    useEffect(() => {
        const db = getFirestore();

        if (item) {
            const q = query(
                collection(db, "items"),
                where(documentId(), "==", item.id)
            );
            getDocs(q).then((snapshot) => {
                if (snapshot.size === 0) {
                    console.log("No se encontaron resultados");
                }
                setProdStock(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            });
        }
    }, [item, prodStock, setProdStock]);


    return (
        <div style={{ minHeight: '100vh' }}>
            <h2 style={{ textAlign: 'center', color: 'rgb(134, 111, 83)', fontFamily: 'Arial' }}>Detalle de producto</h2>
            <div className="" >
                <img className="" alt="imagen-detail" src={item.foto} style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block', height: '50vh' }} />
            </div>
            <div className="">
                <h4 style={{ textAlign: 'center', color: 'rgb(134, 111, 83)', fontFamily: 'Arial' }}>{item.nombre}</h4>
                <p style={{ textAlign: 'center', color: 'rgb(134, 111, 83)', fontFamily: 'Arial' }}>{item.precio}</p>

                <div style={{ textAlign: 'center', color: 'rgb(134, 111, 83)', fontFamily: 'Arial', paddingLeft: '25%', paddingRight: '25%' }} >

                    {/* <ItemCount initial={1} stock={item.stock} item={item} /> */}
                    <ItemCount initial={ item.stock === 0 ? 0 : 1 } stock={item.stock} item={item} />

                    { /* <Intercambiabilidad /> */}


                </div>

                <p style={{ textAlign: 'center', color: 'rgb(134, 111, 83)', fontFamily: 'Arial', paddingLeft: '25%', paddingRight: '25%' }}>{item.descripcion}</p>

            </div>

            {/* <ItemCount  initial={1} stock={stock} /> */}
        </div>
    )

}

