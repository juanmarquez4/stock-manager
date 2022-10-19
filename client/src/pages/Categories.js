import React from "react";
// import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const Categories = () => {
    return (
      <Container>
        <Card className='m-3'>
          <Card.Header>Use this form to add a Category</Card.Header>
            <Container className='mt-3'>
              <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter category name" name="name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text" placeholder="Enter category description" name="description"  />
                </Form.Group>
              
                <Button className='mb-3' variant="primary" type="submit">Click to add Category</Button>
              </Form>
            </Container>
          </Card>
        </Container>
    );
};

export default Categories;