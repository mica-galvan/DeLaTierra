import React, { useState } from 'react';
import '../ItemList/ItemListEstilos/ItemCountEstilo.css';
import { Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Intercambiabilidad from '../Intercambiabilidad/Intercambiabilidad';



const ItemCount = ({ initial, stock, onAdd }) => {
    const [cantidad, setCantidad] = useState(initial);

    const agregaQuitaProducto = (valor) => {
        setCantidad(cantidad + valor);
    };

    onAdd = (cantidad) => {
        console.log("Se agregó " + cantidad + " producto/s.");
    };

    return (
        <Row>
            <>
               
                    <Col>
                        <Button
                           className='boton-aqp'
                            onClick={() => agregaQuitaProducto(-1)}
                            disabled={cantidad === initial ? true : null}
                        >
                            -
                        </Button>
                        <span className="size-span">{cantidad}</span>
                        <Button
                           className='boton-aqp'
                            onClick={() => agregaQuitaProducto(+1)}
                            disabled={cantidad === stock ? true : null}
                        >
                            +
                        </Button>

                        <Intercambiabilidad cantidad={cantidad}/>
                        

                        {/* 

                        <Button className='color-botonAdd' style={{ marginLeft: '18px' }}
                            onClick={() => onAdd(cantidad)}
                            disabled={stock === 0 ? true : null}
                        >
                        </Button>
 */}
                        </Col>
                
            </>
      </Row >
        
    );
};


export default ItemCount;



