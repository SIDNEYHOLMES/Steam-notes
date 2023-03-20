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
    window.location.reload();
  }

useEffect(checkUser, [])
  return (
    <div>
      { user ? 
      <div>
        <img src={user.profileImg} alt='profileimg' />
        <p>{`${user.displayName}`}</p>
        <button onClick={logout}>Logout of steam</button> 
        <button onClick={() => console.log(user)} >log user data</button>
      </div>: 
      <p><a href='auth/steam'>login with steam</a></p>}
    </div>
  )
}