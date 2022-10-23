import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import Auth from '../utils/auth';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
          const { data } = await login({
            variables: { ...formState },
          });
    
          Auth.login(data.login.token);
        } catch (e) {
          console.error(e);
        }
    
        setFormState({
          email: '',
          password: '',
        });
    };
    
    return (
      <>
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <Container>
              <Card className='m-3'>
              <Card.Header>Use this form to login</Card.Header>
                <Container className='my-3'>
                  <Form onSubmit={handleFormSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" name="email"  value={formState.email} onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="******" name="password"  value={formState.password} onChange={handleChange}/>
                    </Form.Group>
                  
                    <Button variant="primary" type="submit">Click to Login</Button>
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

export default Login;

