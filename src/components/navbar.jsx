import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {useNavigate} from "react-router-dom";

const AppNavbar = () => {
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        navigate("/")
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand className="mr-auto">dweb library</Navbar.Brand>
            <Nav className="align-self-end">
                <Nav.Link onClick={handleLogout}>Cerrar sesión</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default AppNavbar;

