import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import Home from './pages/Home'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Categories from './pages/Categories';
import Products from './pages/Products';


import Navv from './components/Nav'
import Footer from './components/Footer';

import './App.css';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App ">
          <Container className="">
          <Card className='m-3 p-3 bg-secondary '>
          <Navv />
            <Routes>
              <Route
                path="/"
                element={<Home />}
              /> 
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/signup"
                element={<Signup />}
              />
              <Route
                path="/dashboard"
                element={<Dashboard />}
              /> 
              <Route
                path="/categories"
                element={<Categories />}
              />
              <Route
                path="/products"
                element={<Products />}
              />
            </Routes>
          <Footer  />
          </Card>
          </Container>
          
          
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
