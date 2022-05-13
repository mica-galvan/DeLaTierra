import React, { useEffect, useState } from 'react';
import '../ItemList/ItemListEstilos/ItemListEstilo.css'
import Item from './Item';
import { LosProductos } from './ItemDatos';


const ItemList = () => {
  const [productos, setProductos] = useState([]);

  const getProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(LosProductos);
    }, 3000);
  });

  const getLosProductos = async () => {
    try {
      const result = await getProductos;
      setProductos(result);
    } catch (error) {
      console.log(error);
      console.log('Página no disponible');
    }
  };

  useEffect(() => {
    getLosProductos();
  }, []);

  return (
    <div className= "item-list-columna">
      {
       productos.length ? (
          <>
            {
             
              productos.map((producto) => {
                return (
                    <div  key={producto.id}>
                        
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
            <h4 style={{ textAlign: 'center', color: 'grey'}} >Cargando por favor espere...</h4>
          )
        }
      </div>
    );
  };
  
  export default ItemList;
  