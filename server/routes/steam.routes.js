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

steam.get('/library:steamId', (req, res) => {
  const { steamId } = req.params;
  const url = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_KEY}&steamid=${steamId}&include_appinfo=true`;
 axios.get(url)
 .then(data => res.send(data.data).status(200))
 .catch(err => console.log(err));

});

module.exports = steam;