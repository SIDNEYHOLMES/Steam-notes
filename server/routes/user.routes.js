const express = require("express");
const user = express.Router();

user.get('/current', (req, res) => {
  const { user } = req
  res.status(200).send(user)
})

user.get('/logout', (req, res) => {
  req.logout((err) => console.log('logged out (:'));
  res.status(200)
  res.redirect('/')
})

module.exports = user;