import React from "react";
import { Link } from 'react-router-dom';


const Products = () => {
    return (
      <container className="Card">
        <div className="Card-header" >
          <h1>Products</h1>
          <Link>
            <h1>Create</h1>
          </Link>
        </div>
        <div>
          <form>
            <input
            placeholder="Enter product name"
            />
            <button>
              Search
            </button>
          </form>
        </div>
        <div className="Card-body">
          <table>
            <div className="Card-header">
                <h1>name</h1>
                <h1>Description</h1>
            </div>
            <div className="Card-header">
                <h1>Wine</h1>
                <h1>comes from grapes</h1>
            </div>
          </table>
        </div>
      </container>
    );
};

export default Products;