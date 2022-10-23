import React from 'react';
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from '../utils/queries';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

// complete this ...
const Home = () => {
    const { loading, data } = useQuery(QUERY_PRODUCTS);
    // const products = data?.products || [];
  
    return (
      <Container >
        <Card className='m-3'>
          <Card.Header>React Stock & Inventory Manager</Card.Header>
          <Card.Body>Manage the stock of your business in a convinient way</Card.Body>
        </Card>
        <Container >
        <Table striped bordered hover >
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Number of items in store</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {!loading && data.products.map(product => <tr value={product._id} >
              <td>{product._id}</td>
              <td>{product.name}</td>
              <td>{product.category.name}</td>
              <td>{product.quantity}</td>
              <td>{product.description}</td>
            </tr>)}
          </tbody>
        </Table>

        </Container>
        
      </Container>
    );
  };
  
  export default Home;