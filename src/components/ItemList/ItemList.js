import React, { useEffect, useState } from 'react';
import '../ItemList/ItemListEstilos/ItemListEstilo.css'
import Item from '../Item/Item';
import { useParams } from 'react-router-dom';
import '../EstiloLoader/estiloLoader.css';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useCartContext } from "../../Context/CartContext"

const ItemList = () => {
  const { prodStock, setProdStock } = useCartContext()
  const [productos, setProductos] = useState([]);
  //const [loading, setLoading] = useState(true);

  //console.log(loading);

  const { categoriaFiltro } = useParams()

  useEffect(() => {
    const db = getFirestore();

    if (categoriaFiltro) {
      const q = query(
        collection(db, "items"),
        where("categoria", "==", categoriaFiltro)
      );
      getDocs(q).then((snapshot) => {
        if (snapshot.size === 0) {
          console.log("No se encontaron resultados");
        }
        setProductos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        //setLoading(false);
      });
    } else {
      const itemsCollection = collection(db,"items");
      getDocs(itemsCollection).then((snapshot) => {
        setProductos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))); 
        //setProdStock(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));       
        //setLoading(false);
      });
    }
  }, [categoriaFiltro, prodStock, setProdStock]);


  return (
    <div className="item-list-columna">
      {
        productos.length ? (
          <>
            {

              productos.map((producto) => {
                return (
                  <div key={producto.id}>

                    <Item
                      nombre={producto.nombre}
                      foto={producto.foto}
                      precio={producto.precio}
                      stock={producto.stock}
                      id={producto.id}
                    />

                  </div>
                );
              })
            }
          </>
        ) : (
          // <h4 style={{ textAlign: 'center', color: 'grey' }} >Cargando por favor espere...</h4>
          <span style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }} className="loader"></span>
        )
      }
    </div>
  );
};

export default ItemList