const axios = require("axios");
const dotenv = require("dotenv");
const express = require("express");
dotenv.config()

const steam = express.Router();

const url = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_KEY}&steamid=76561198126162546&include_appinfo=true`;

const headers = {
  'Content-Type': 'text/html; charset=UTF-8',
  'Access-Control-Allow-Origin': '*',
  'content-encoding': 'gzip, deflate, br',
  'Accept': '*/*',
  'accept-encoding': 'false',
}

steam.get('/library', (req, res) => {
  axios.get(url, { headers })
  .then(data => res.status(200).send(data))
  .catch(err => console.log(err, 'err'))
});

module.exports = steam;