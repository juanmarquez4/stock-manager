import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';


function Footer() {
    return (
    <Container>
        <Card bg="light" className="border-0 p-3" >
            <Card.Link href="https://github.com/juanmarquez4">Developed by Juan Marquez</Card.Link>
        </Card>
    </Container>
    
    );
}

export default Footer;