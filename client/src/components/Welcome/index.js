import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
// import {LinkContainer} from 'react-router-bootstrap';

function Welcome() {
    return (
        <>
        <Container className='min-vh-100'>
            <Card className='m-3 ' border="success">
                <Card.Header>Welcome to Stock Manager</Card.Header>
                <Card.Body>
                    <p>Please{' '}<Link to="/login">login</Link> or <Link to="/signup">signup</Link> in order to add Categories and Products to your Stock Manager.</p>
                </Card.Body>
            </Card>
        </Container>
        </>
    )
};

export default Welcome;


