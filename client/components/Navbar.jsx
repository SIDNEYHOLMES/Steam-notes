import React from 'react';
import { Link } from 'react-router-dom';

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
    <li>
      Log in with steam
    </li>
  </ul>
  </nav>
  </>
  )
}


export default Navbar