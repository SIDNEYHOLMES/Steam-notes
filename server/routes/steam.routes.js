const axios = require("axios");
const dotenv = require("dotenv");
const express = require("express");
dotenv.config()

const steam = express.Router();


const headers = {
  'Content-Type': 'text/html; charset=UTF-8',
  'Access-Control-Allow-Origin': '*',
  'content-encoding': 'gzip, deflate, br',
  'Accept': '*/*',
  'accept-encoding': 'false',
}

steam.get('/library', (req, res) => {
  console.log(req.user.steamId)
  const url = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_KEY}&steamid=${req.user.steamId}&include_appinfo=true`;
 axios.get(url)
 .then(data => res.send(data.data).status(200))
 .catch(err => console.log(err));

});

steam.get('/points', ( req, res ) => {
  console.log(req.user.steamId)
  const url = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_KEY}&steamid=${req.user.steamId}&include_appinfo=true`;
  axios.get(url)
    .then(data => res.send(data.data).status(200))
    .catch(err => console.log(err));
})

module.exports = steam;