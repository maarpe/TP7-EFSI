import { Button, Container, Form, Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'

function Layout() {
    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/Home">Home</Nav.Link>
                        <Nav.Link to="/Productos">Productos</Nav.Link>
                        <Nav.Link to="/DetalleProducto">Ver los detalles de los productos</Nav.Link>
                        <Nav.Link to="/Contacto">Quienes somos</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
}

export default Layout;
/*

            <Link to="/Productos">Productos</Link>
            <Link to="/DetalleProducto">Detalles de productos</Link>
            <Link to="/Contacto">Quienes somos</Link>*/