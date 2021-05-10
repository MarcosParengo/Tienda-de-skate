import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "./CartWidget"

const bootnavbar = ({ linkTo }) => {
    return (
        <Navbar bg="dark" expand="md" variant="dark" className="px-5">
            <Navbar.Brand as={Link} to={"/Tienda-de-skate/"}>
                <img
                    alt=""
                    src="https://github.com/MarcosParengo/Tienda-de-skate/blob/master/public/images/banner.png?raw=true"
                    width="60"
                    height="30"
                    className="d-inline-block align-top"
                />
                {' '}
                SkateShop
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav >
                    <Nav.Link as={Link} to={"/Tienda-de-skate/"}>Home</Nav.Link>
                    <NavDropdown title="Categories" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to={"/Tienda-de-skate/category/Bones"}>Bones</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={"/Tienda-de-skate/category/Spitfire"}>Spitfire</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={"/Tienda-de-skate/category/Grizzly"}>Grizzly</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={"/Tienda-de-skate/category/Element"}>Element</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={"/Tienda-de-skate/category/RedBones"}>RedBones</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={"/Tienda-de-skate/category/Independent"}>Independent</NavDropdown.Item>
                        <NavDropdown.Item href={linkTo} target="_blank">Una pagina de skate real</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav className="justify-content-end" style={{ width: "100%" }}>
                    <CartWidget/>
                </Nav>
            </Navbar.Collapse>

        </Navbar>

    )
}
export default bootnavbar
