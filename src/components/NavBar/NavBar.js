import img from '../NavBar/imagenes/logoMain.svg'
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'
import { Navbar} from 'react-bootstrap';
import { Nav} from 'react-bootstrap';
import { Container } from 'react-bootstrap';
//import { NavDropdown } from 'react-bootstrap';
import { Link , NavLink} from 'react-router-dom';

function NavBar() {
    return (



<Navbar className='nav' collapseOnSelect expand="lg" bg="" variant="light">
  <Container>
  <Navbar.Brand>
    <Link to='/'>
  <img src={img} className='main-logo logo' alt='logo'/>
    </Link>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto nav-right">
      <NavLink className="nav-link" to='/'> Inicio </NavLink>
      <NavLink className="nav-link" to='/categoria/Macetas'> Macetas </NavLink>
      <NavLink className="nav-link" to='/categoria/Herramientas'> Herramientas</NavLink>
      <NavLink className="nav-link" to='/categoria/cesped-y-riego'> Cesped y Riego </NavLink>
      {/* <NavLink to=''> <NavDropdown title="Cesped y Riego" id="collasible-nav-dropdown"> </NavLink>
        <NavDropdown.Item href="#Cesped y Riego/Decoración">Decoración</NavDropdown.Item>
        <NavDropdown.Item href="#Cesped y Riego/Fertilizantes">Fertilizantes</NavDropdown.Item>
    
        <NavDropdown.Divider />
        <NavDropdown.Item href="#Cesped y Riego/Plantas">Plantas</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <CartWidget />
    {/* <Nav>
      <Nav.Link className='carrito nav-link' ><CartWidget /></Nav.Link>
    </Nav> */}
  </Navbar.Collapse>
  </Container>
</Navbar>
    );

}

export default NavBar;

