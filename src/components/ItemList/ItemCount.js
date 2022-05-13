import React, { useState } from 'react';
import '../ItemList/ItemListEstilos/ItemCountEstilo.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



const ItemCount = ({ initial, stock, onAdd }) => {
    const [cantidad, setCantidad] = useState(initial);

    const agregaQuitaProducto = (valor) => {
        setCantidad(cantidad + valor);
    };

    onAdd = (cantidad) => {
        alert("Se agregó " + cantidad + " producto/s.");
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

                        <Button className='color-botonAdd' style={{ marginLeft: '18px' }}
                            onClick={() => onAdd(cantidad)}
                            disabled={stock === 0 ? true : null}
                        >
                            Añadir al carrito
                        </Button>

                        </Col>
                
            </>
      </Row >
        
    );
};


export default ItemCount;


