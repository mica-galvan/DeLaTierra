import React, { useEffect, useState } from 'react';
import '../ItemList/ItemListEstilos/ItemListEstilo.css'
import Item from '../Item/Item';
//import { LosProductos } from '../Item/ItemDatos';
import { getFetch } from '../Item/getFetch';
import { useParams } from 'react-router-dom';
import '../EstiloLoader/estiloLoader.css'


const ItemList = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoriaFiltro } = useParams()

  useEffect(() => {
    if (categoriaFiltro) {
      getFetch()
        .then(respuesta => setProductos(respuesta.filter((productosFiltrados) => productosFiltrados.categoria === categoriaFiltro)))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    } else {
      getFetch()
        .then(respuesta => setProductos(respuesta))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    }

  }, [categoriaFiltro]);

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
         <span style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }}className="loader"></span>
        )
      }
    </div>
  );
};

export default ItemList