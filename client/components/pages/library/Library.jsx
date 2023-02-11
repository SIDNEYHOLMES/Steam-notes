import React, { useEffect, useState } from "react";
import axios from "axios";
import { Gamelist } from "./Gamelist.jsx";

const Library = () => {
  
  const [ gamelist, setgameList ] = useState([]);
  const getUserLibrary = (steamId) => {
    axios.get(`/api/steam/library${steamId}`)
    .then(data => {
      const { response } = data.data;
      setgameList(response.games)
    })
    .catch(err => console.log(err, 'err, client'))
  } 

  useEffect(() => getUserLibrary('76561198126162546'), []);
  return (
    <div>
      <Gamelist gamelist={gamelist}/>
    </div>
  )
}

export default Library