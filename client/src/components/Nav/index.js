import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'

function Navv() {
    return (
        <>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand >Stock Manager</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <LinkContainer to="/">
                    <Nav.Link href="#home">Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/categories">
                    <Nav.Link href="#link">Categories</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/products">
                    <Nav.Link href="#link">Products</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
    );
}

export default Navv;