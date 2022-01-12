import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar  from 'react-bootstrap/Navbar';
import NavDropdown  from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
 


function NavBar () {
    return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
    <Navbar.Brand href="#home">Tienda Online</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Productos</Nav.Link>
        <Nav.Link href="#link">Contacto</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
)
}

export default NavBar; 