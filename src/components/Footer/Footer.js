//import img from '../NavBar/imagenes/logoMain.svg'
//import CartWidget from '../CartWidget/CartWidget';
import './Footer.css'
//import { ModalFooter } from 'react-bootstrap';
import { BsWhatsapp, BsFacebook, BsInstagram } from "react-icons/bs";
import { Container } from 'react-bootstrap';
//import { NavDropdown } from 'react-bootstrap';
//import { Link } from 'react-router-dom';

function Footerp() {
    return (

 
<div className='footer justify-content-center align-items-center py-3 my-4 border-top'  expand="lg" bg="" variant="light">
{/* <div className='footer justify-content-center align-items-center py-3 my-4 border-top' collapseOnSelect expand="lg" bg="" variant="light"> */}
  <Container className=' justify-content-center text-center align-items-center '>
  

 <span><BsWhatsapp className=' text-center iconosf'/></span>
 <span>< BsFacebook className=' text-center iconosf'/></span>
 <span>< BsInstagram className='text-center iconosf'/></span>
 <span className='text-center text-muted'> © 2022 de la Tierra, todos los derechos reservados</span>
   
      {/* <Nav.Link className='carrito nav-link' ><CartWidget /></Nav.Link> */}

  
  </Container>
</div>
    );

}

export default Footerp;

