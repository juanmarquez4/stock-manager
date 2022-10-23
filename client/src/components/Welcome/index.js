import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
// import {LinkContainer} from 'react-router-bootstrap';

function Welcome() {
    return (
        <>
        <Container>
            <Card className='m-3'>
                <Card.Header>Welcome to Stock Manager</Card.Header>
                <Card.Body>
                    <p>You need to be logged in to "_". Please{' '}<Link to="/login">login</Link> or <Link to="/signup">signup.</Link></p>
                    <h1>Hello</h1>
                </Card.Body>
            </Card>
        </Container>
        </>
    )
};

export default Welcome;


