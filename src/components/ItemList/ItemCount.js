import React, { useState } from 'react';
import '../ItemList/ItemListEstilos/ItemCountEstilo.css';
import { Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Intercambiabilidad from '../Intercambiabilidad/Intercambiabilidad';


import { useCartContext } from '../../Context/CartContext';

const ItemCount = ({ initial, stock, onAdd, item }) => {
    
    const { addToCart } = useCartContext()

    const [cantidad, setCantidad] = useState(initial);

    function agrega() {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        } 
    }
    function quita() {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        } 
    }

     function addItem(cantidad, item) {
         onAdd(cantidad, item);
     }

     onAdd = (cantidad, item) => {
        addToCart({ ...item, cantidad: cantidad })
    };

    return (
        <Row>
            <>
               
                    <Col>
                        <Button
                           className='boton-aqp'
                            onClick={() => quita(-1)}
                            disabled={cantidad === initial ? true : null}
                        >
                            -
                        </Button>
                        <span className="size-span">{cantidad}</span>
                        <Button
                           className='boton-aqp'
                            onClick={() => agrega(+1)}
                            disabled={cantidad === stock ? true : null}
                        >
                            +
                        </Button>

                        <Intercambiabilidad cantidad={cantidad} item={item} onAdd={addItem} stock={stock} />
                        {/* <Button className='color-botonAdd' style={{ marginLeft: '18px' }}
                            onClick={() => addItem} 
                            disabled={stock === 0 ? true : null}
                        >
                            añadir al carrito
                        </Button> */}

                        
                        

                        {/* 
<Intercambiabilidad cantidad={cantidad}/>
                       
 */}
                        </Col>
                
            </>
      </Row >
        
    );
};


export default ItemCount;



