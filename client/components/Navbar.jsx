import React from 'react';
import { Link } from 'react-router-dom';
import { Login } from './Login.jsx';

const Navbar = () => {
  return (
  <>
  <nav>
  <ul>
    <li>
      <Link to={'/library'}>Library</Link>
    </li>
    <li>
      <Link to={'/'}>Home</Link>
    </li>
    <li>
      <Link to={'/leaderboard'}>Leaderboard</Link>
    </li>
       <Login/>
  </ul>
  </nav>
  </>
  )
}


export default Navbar