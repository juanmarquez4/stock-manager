import React from "react";
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
import { Box } from "@chakra-ui/react"

function Header() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>
    <Box display="flex" justifyContent="space-between" bg="#282c34" color="#FFFFFF">
      <Link className="text-dark" to="/">
        <h1 className="m-0" style={{ fontSize: '3rem' }}>
          Stock Manager
        </h1>
      </Link>
      {/* <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
        Meet your new programming pals.
      </p> */}
      <div>
        {Auth.loggedIn() ? (
          <button className="btn btn-lg btn-light m-2" onClick={logout}>
            Logout
          </button>
        ) : (
          <>
            <Link className="btn btn-lg btn-primary m-2" to="/login">
              Login
            </Link>
            <Link className="btn btn-lg btn-light m-2" to="/signup">
              Signup
            </Link>
          </>
        )}
      </div>
    </Box>
  </header>
  );
}

export default Header;