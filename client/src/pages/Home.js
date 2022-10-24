import React from 'react';
// import { Link } from 'react-router-dom';
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from '../utils/queries';
import { REMOVE_PRODUCT } from "../utils/mutations"

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

import Welcome from '../components/Welcome';

import Auth from '../utils/auth';

// complete this ...
const Home = () => {
  // const [formState, setFormState] = useState({ name: '' });
  const [removeProduct, { error}] = useMutation(REMOVE_PRODUCT,
  {
    refetchQueries: [
      {query: QUERY_PRODUCTS }, 
    ],
  }
  );

    const { loading, data } = useQuery(QUERY_PRODUCTS);
    // const products = data?.products || [];
  
    console.log(data);


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
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {!loading && data.products.map((product) => 
              <tr key={product._id} >
                {/* <td>{product._id}</td> */}
                <td>{product.name}</td>
                <td>{product.category.name}</td>
                <td>{product.quantity}</td>
                <td>{product.description}</td>
                <td>
                  <button type="button" onClick={() => removeProduct({
                    variables: {
                      productId: product._id
                  } 
                  })}>
                    <span role="img" aria-label="delete">
                      ✖️
                    </span>
                  </button>
                </td>
              </tr>
              )}

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

        {error && (
           <div className="my-3 p-3 bg-danger text-white">
             {error.message}
           </div>
        )} 
      </>
      
    );
  };
  
  export default Home;   
  
  
  