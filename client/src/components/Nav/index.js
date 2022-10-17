import React from "react";
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className='nav'>
            <Link to="/">
                <h1>Home</h1>
            </Link>
            <Link to="/categories">
                <h1>Categories</h1>
            </Link> 
            <Link to="/products">
                <h1>Products</h1>
            </Link> 
            <Link to="/purchases">
                <h1>Purchases</h1>
            </Link> 
            <Link to="/sales">
                <h1>Sales</h1>
            </Link> 
        </nav>
    );
}

export default Nav;