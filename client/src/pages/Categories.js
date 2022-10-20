import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_CATEGORY } from "../utils/mutations";

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import Auth from '../utils/auth';

const Categories = () => {
  const [formState, setFormState] = useState({ name: '' });
  const [addCategory, { error, data }] = useMutation(ADD_CATEGORY);

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
      const { data } = await addCategory({
        variables: { ...formState },
      });

      Auth.login(data.addCategory.token);
    } catch (e) {
      console.error(e);
    }
    setFormState({
      name: '',
      description: '',
    });
  };

    return (
    <>
      {data ? (
              <p>
                Success! Category added{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
      <Container>
        <Card className='m-3'>
          <Card.Header>Use this form to add a Category</Card.Header>
            <Container className='mt-3'>
              <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter category name" name="name" value={formState.name} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text" placeholder="Enter category description" name="description" value={formState.description} onChange={handleChange}  />
                </Form.Group>
              
                <Button className='mb-3' variant="primary" type="submit">Click to add Category</Button>
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

export default Categories;