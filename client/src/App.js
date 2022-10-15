import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* header */}
      <div className='header'>
        <h1>Stock Manager</h1>
        <div className='login'>
          <h1>Sign Up</h1> 
          <h1>Login</h1>
        </div>
      </div>
      {/* navigation */}
      <div className='nav'>
        <h1>Home</h1>
        <h1>Categories</h1> 
        <h1>Products</h1>
        <h1>Purchases</h1>
        <h1>Sales</h1>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
       {/* footer */}
      <div className='footer'>
        <h1>Developed by Juan Marquez</h1>
      </div>
    </div>
  );
}

export default App;
