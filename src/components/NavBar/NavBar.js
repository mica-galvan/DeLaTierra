import img from '../NavBar/imagenes/logoMain.svg'
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';

function NavBar() {
    return (



<Navbar className='nav' collapseOnSelect expand="lg" bg="" variant="light">
  <Container>
  <Navbar.Brand href="#home">
  <img src={img} className='main-logo logo' alt='logo'/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto nav-right">
      <Nav.Link href="#Home">Inicio</Nav.Link>
      <Nav.Link href="#products">Productos</Nav.Link>
      <Nav.Link href="#contact">Contacto</Nav.Link>
      <NavDropdown title="Mayoristas" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Referencias</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Presupuestos</NavDropdown.Item>
    
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Mayoristas</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link className='carrito' href="#"><CartWidget /></Nav.Link>

    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );

}

export default NavBar;

