import React from 'react';
// import { Link } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from '../utils/queries';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

import Welcome from '../components/Welcome';

import Auth from '../utils/auth';

// complete this ...
const Home = () => {
    const { loading, data } = useQuery(QUERY_PRODUCTS);
    // const products = data?.products || [];
  
    return (
      <>
       {Auth.loggedIn() ? (
      <Container >

        <Card className='m-3'>
        <Card.Header>Stock in store</Card.Header>
        <Card.Body>
          <Table striped  hover >
            <thead>
              <tr>
                {/* <th>#</th> */}
                <th>Product Name</th>
                <th>Category</th>
                <th>Number of items in store</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {!loading && data.products.map(product => 
              <tr value={product._id} >
                {/* <td>{product._id}</td> */}
                <td>{product.name}</td>
                <td>{product.category.name}</td>
                <td>{product.quantity}</td>
                <td>{product.description}</td>
              </tr>)}
            </tbody>
          </Table>
        </Card.Body>
        </Card>
        
      </Container>
       ) : (
        <>
        <Welcome />
        </>
       )}
      </>
      
    );
  };
  
  export default Home;   
  
  
  