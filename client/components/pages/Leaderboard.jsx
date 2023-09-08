import React from "react";
import axios from 'axios';

const Leaderboard = () => {
  
  const callibratePoints = () => {
    // get the currently logged in users steam id
    axios.get(`/api/steam/points`) //send the steam id to the steam api for game data
      .then(data => {
        const { response } = data.data;
        let pointTotal = response.games.reduce((acc, curr) => { // add the minutes of all the games in the library
          acc += curr.playtime_forever
          return acc }, 0);
        pointTotal = Math.floor(pointTotal/60) + response.game_count // turn the minutes into hours and add the number of games
        console.log(pointTotal)
      })
      .catch(err => console.log(err, 'err, client'));
  }

  return (
    <div>
      LEADERBOARD PAGE
      <button onClick={callibratePoints}>Calibrate Points</button>
    </div>
  )
}

export default Leaderboard;