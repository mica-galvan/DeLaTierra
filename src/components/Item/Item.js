import ItemCount from '../ItemList/ItemCount'
import { Card, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../ItemList/ItemListEstilos/ItemCountEstilo.css';


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
                    <Link to={`/detalle/${id}`}>
                <Button className='color-botonAdd'>Ver producto</Button>
                </Link>  
                </Card.Text>   
                         
            </Container>
        </Card>
        
        
 );
};

export default Item;
