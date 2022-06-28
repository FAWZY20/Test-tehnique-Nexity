import "./Header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function ColorSchemesExample() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container className="menu">
                    <div>
                        <Navbar.Brand to="/">E-commerce</Navbar.Brand>
                    </div>
                    <div>
                        <Nav className="me-auto">
                            <Link className="menu-link" to="/">Boutique</Link>
                            <Link className="menu-link" to="/ajouter">Ajouter</Link>
                            <Link className="menu-link" to="/list">List</Link>
                        </Nav>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
}

export default ColorSchemesExample;