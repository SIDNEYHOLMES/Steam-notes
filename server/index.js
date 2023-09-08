const express = require('express');
const path = require('path');
const User = require('./db');
const session = require('express-session');
const rootRouter = require('./routes');
const passport = require('passport');
const SteamStrategy = require('passport-steam').Strategy;
const MongoClient = require('mongodb').MongoClient;
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
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
 

//passport-steam strategy
//passport-steam strategy
passport.use(
  new SteamStrategy({
    returnURL: 'http://localhost:8080/auth/steam/return',
    realm: 'http://localhost:8080',
    apiKey: `${process.env.STEAM_KEY}`
  },
  // if the user is not found create that user via mongoose
   async function(identifier, profile, done) {
     try {
       const user = await User.findOne({ steamId: profile.id });
       if (!user) {
         const newUser = new User({
           steamId: profile.id,
           displayName: profile.displayName,
           profileUrl: profile._json.profileurl,
           profileImg: profile.photos[0].value,
           libraryScore: 0
          });
          await newUser.save();
          done(null, newUser);
        } else {
          done(null, user);
        }
      } catch (err) {
        console.log(err);
      done(err);
    }
  }
  ));
  
  //passport serialization for storing user data.
  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((obj, done) => done(null, obj));
  
  // use the transpiler dist
  app.use('/', express.static(path.resolve('dist')));
  
  // set routes
  app.use('/api', rootRouter)
  
  // passport steam authentication routes
  app.get('/', (req, res) => {
    res.send(req.user);
})

// if the authentication route works or dosesent it will still send to the home
app.get('/auth/steam', passport.authenticate('steam', {
  failureRedirect: '/'
}),
 function(req, res) {
  res.redirect('/');
 });

app.get('/auth/steam/return', passport.authenticate('steam', {
  failureRedirect: '/'
}),
 function(req, res) {
  res.redirect('/');
 });

 
 // route react router urls correctly
 
 
 app.get('/*', function(req, res) {
   res.sendFile(path.join(__dirname, '../client/dist/index.html'), function(err) {
     if (err) {
       res.status(500).send(err)
      }
    })
  })

  // catch 404 and forward to error handler
app.use(function (req, res, next) {
  console.log('ERROR 404')
});

// server is listening
app.listen(PORT, () => console.log(`Server listening on port:${PORT}`))