import ItemCount from './ItemCount.js';
import { Card, Col, Container, Row } from 'react-bootstrap';


const Item = ({ nombre, foto, precio, id, stock }) => {

    return (
     
        <Card>
            <Container>
                <Card.Text className="">
                    <Card.Img variant='top' src={foto} style={{ width: '180px', height: '180px' }} alt='imagenMaceta' />
                    <Card.Title className="nombre-estilo">{nombre}</Card.Title>
                    <span className="">{precio}</span>
                    <Card.Text>Stock Disponible: {stock} </Card.Text>
                    <ItemCount  initial={1} stock={stock} />
                </Card.Text>              
            </Container>
        </Card>
        
        
 );
};

export default Item;
