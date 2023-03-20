const express = require("express");
const user = express.Router();

user.get('/current', (req, res) => {
  const { user } = req
  res.status(200).send(user)
})

user.get('/logout', (req, res) => {
  console.log(req.user);
  req.logout((err) => console.log(req.user));
  res.sendStatus(200);
})

module.exports = user;