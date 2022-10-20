import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useMutation } from "@apollo/client";
import { ADD_PRODUCT } from "../utils/mutations";

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import Auth from '../utils/auth';

const Products = () => {
  const [formState, setFormState] = useState({ name: '' });
  const [addProduct, { error, data }] = useMutation(ADD_PRODUCT);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await addProduct({
        variables: { ...formState },
      });

      Auth.login(data.addProduct.token);
    } catch (e) {
      console.error(e);
    }
    setFormState({
      name: '',
      category: '',
      quantity: '',
      description: '',
    });
  };

    return (
      <>
      {data ? (
              <p>
                Success! Product added{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
      <Container>
        <Card className='m-3'>
          <Card.Header>Use this form to add a Product</Card.Header>
            <Container className='mt-3'>
              <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter product name" name="name" value={formState.name} onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Categories</Form.Label>
                  <Form.Select aria-label="Default select example" value={formState.category} onChange={handleChange}>
                    <option>Select a Category for this product</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" >
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control placeholder="Enter number of items in store" name="quantity" value={formState.quantity} onChange={handleChange} />
                </Form.Group>
               

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text" placeholder="Enter product description" name="description" value={formState.description} onChange={handleChange}/>
                </Form.Group>
              
                <Button variant="primary" type="submit" className='mb-3'>Click to add Product</Button>
              </Form>
            </Container>
        </Card>
      </Container>
       )}

       {error && (
         <div className="my-3 p-3 bg-danger text-white">
           {error.message}
         </div>
       )}
    </>
    );
};

export default Products;