import React from "react";
// import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const Products = () => {
    return (
      <Container>
        <Card className='m-3'>
          <Card.Header>Use this form to add a Product</Card.Header>
            <Container className='mt-3'>
              <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter product name" name="name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Categories</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Select a Category for this product</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Items</Form.Label>
                  <Form.Control placeholder="Enter number of items in store" name="items"  />
                </Form.Group>
               

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text" placeholder="Enter product description" name="description"  />
                </Form.Group>
              
                <Button variant="primary" type="submit" className='mb-3'>Click to add Product</Button>
              </Form>
            </Container>
        </Card>
      </Container>
    );
};

export default Products;