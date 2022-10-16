import React from 'react';
import { useQuery } from '@apollo/client'

import { QUERY_PROFILES } from '../utils/queries';

import logo from '../logo.svg';

// complete this ...
const Home = () => {
    const { loading, data } = useQuery(QUERY_PROFILES);
    const profiles = data?.profiles || [];
  
    return (
      <main>
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
      </main>
    );
  };
  
  export default Home;