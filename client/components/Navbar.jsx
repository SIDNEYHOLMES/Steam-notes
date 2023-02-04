import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  <>
  <nav>
  <ul>
    <li>
      <Link to={'/library'}>library</Link>
    </li>
  </ul>
  </nav>
  </>
}


export default Navbar