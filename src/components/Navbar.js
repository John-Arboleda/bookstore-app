import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h3>BookStore</h3>
      <ul>
        <Link to="/">Books |</Link>
        <Link to="/categories">Categories</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
