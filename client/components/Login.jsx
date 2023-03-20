import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Login = () => {

  const [user, setUser] = useState({});

  const checkUser = () => {
    axios.get('/api/user/current')
    .then(({ data }) => setUser(data))
    .catch(err => console.log(err));
    console.log(user)
  }

  const logout = () => {
    axios.get('/api/user/logout')
      .then(data => data)
      .catch(err => console.log(err));
  }

useEffect(checkUser, [])
  return (
    <div>
      <p><a href='auth/steam'>login with steam</a></p>
      <button onClick={logout}>Logout of steam</button>
    </div>
  )
}