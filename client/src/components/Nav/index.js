import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {LinkContainer} from 'react-router-bootstrap'
import Auth from '../../utils/auth';

function Navv() {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };
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
              <Form>
                {Auth.loggedIn() ? (
                    <Button onClick={logout}>Logout</Button>
                    ) : (
                        <>
                            <LinkContainer to="/login">
                            <Button className="btn btn-lg btn-primary m-2">Login</Button>
                            </LinkContainer>
                            <LinkContainer to="/signup">
                            <Button className="btn btn-lg btn-primary m-2">Signup</Button>
                            </LinkContainer>
                        </>
                )}
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
    );
}

export default Navv;