import React, { useEffect } from "react";
import axios from "axios";

const Library = () => {

  const getUserLibrary = (steamId) => {
    axios.get('/api/steam/library')
    .then(data => console.log(data))
    .catch(err => console.log(err, 'err, client'))
  } 

  useEffect(getUserLibrary, []);
  return (
    <div>
      LIBRARY PAGE
    </div>
  )
}

export default Library