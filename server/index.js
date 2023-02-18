const express = require('express');
const path = require('path')
const {MongoClient} = require('mongodb');
const session = require('express-session')
const rootRouter = require('./routes');
const passport = require('passport');
const SteamStrategy = require('passport-steam').Strategy;
const dotenv = require("dotenv");
const app = express();
const PORT = 8080;
dotenv.config

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve('client', 'dist')));
app.use(express.json());
app.use(session({
  secret: 'Our little secret.',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());               

//passport-steam strategy
passport.use(
  new SteamStrategy({
    returnURL: 'http://localhost:8080/auth/steam/return',
    realm: 'http://localhost:8080',
    apiKey: `${process.env.STEAM_KEY}`
  })
)

// use the transpiler dist
app.use('/', express.static(path.resolve('dist')));

// set routes
app.use('/api', rootRouter)

// route react router urls correctly
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

// server is listening
app.listen(PORT, () => console.log(`Server listening on port:${PORT}`))