import CartWidget from './CartWidget';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="light" variant="light" expand="lg">
            <Container>
                <Navbar.Brand href="#inicio">LOGO</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#inicio">Inicio</Nav.Link>
                    <Nav.Link href="#categorias">Categorías</Nav.Link>
                    <Nav.Link href="#productosnuevos">Lanzamientos</Nav.Link>
                    <Nav.Link href="#masvendidos">Populares</Nav.Link>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    );
};

export default NavBar;

