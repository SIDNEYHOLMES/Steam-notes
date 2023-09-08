import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Login } from './Login.jsx';
import axios from 'axios';

const Navbar = () => {
  const [user, setUser] = useState({})

  const getUser = () => {
    axios.get('/api/user/current')
    .then(({ data }) => setUser(data))
    .catch(err => console.log(err));
  }

  useEffect(getUser, [])
  return (
  <>
  <nav>
  <ul>
    <li>
      <Link to={'/'}>Home</Link>
    </li>
   { user ?<> <li>
      <Link to={'/library'}>Library</Link>
    </li>
    <li>
      <Link to={'/leaderboard'}>Leaderboard</Link>
    </li></> : <></> }
       <Login/>
  </ul>
  </nav>
  </>
  )
}


export default Navbar