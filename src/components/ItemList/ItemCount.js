import React, { useState } from 'react';
import  '../ItemList/ItemCountEstilo.css';
import img from '../ItemList/Imagenes-Items/IMG_20211010_210040_711.jpg'
import { Card, Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



const ItemCount = ({ initial, stock, onAdd }) => {
    const [cantidad, setCantidad] = useState(initial);

    const agregaQuitaProducto = (valor) => {
        setCantidad(cantidad + valor);
    };

    onAdd = (cantidad) => {
        alert("Se agregaron " + cantidad + " maceta/s.");
    };

    return (
        <Card>  
            <Container>         
            <Card.Img variant='top' src={img} style={{ width: '180px', height:'180px' }} alt='imagen' />
            <Card.Body>
            <Card.Title>Maceta Grande</Card.Title>
            <Card.Text>stock disponible: 4</Card.Text>
            
                <Button
                    variant='secondary'
                    onClick={() => agregaQuitaProducto(-1)}
                    disabled={cantidad === initial ? true : null}
                >
                    -
                </Button>
                <span className="qty-span">{cantidad}</span>
                <Button
                    variant='secondary'
                    onClick={() => agregaQuitaProducto(+1)}
                    disabled={cantidad === stock ? true : null}
                >
                    +
                </Button>
                
                <Button variant='success' style={{ marginLeft:'18px' }}
                onClick={() => onAdd(cantidad)}
                disabled={stock === 0 ? true : null}
            >
                Añadir al carrito
            </Button>
                </Card.Body>
                </Container> 

        </Card>
    );



};

/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
 */


export default ItemCount;


