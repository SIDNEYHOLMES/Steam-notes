import React, { useEffect, useState } from "react";
import axios from "axios";
import { Gamelist } from "./Gamelist.jsx";

const Library = () => {
  
  const [ gamelist, setgameList ] = useState([]);

  const getUserLibrary = () => {
    // get the currently logged in users steam id
    axios.get('/api/user/current')
      .then(({ data }) => axios.get(`/api/steam/library${data.steamId}`) //send the steam id to the steam api for game data
      .then(data => {
        const { response } = data.data;
        setgameList(response.games) // send game list data to gamelist component
      })
      .catch(err => console.log(err, 'err, client')))
      .catch(err => console.log(err))
      // make the api call with that steamId
  } 

  useEffect(getUserLibrary, []);
  return (
    <div>
      <Gamelist gamelist={gamelist}/>
    </div>
  )
}

export default Library