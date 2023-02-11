import React, { useEffect } from "react";

export const Gamelist = ({gamelist}) => {
  return (
  <div>
      gamelist
      <ul>
        {gamelist.map(game => <li>{game.name}</li>)}
      </ul>
  </div>
  )
}