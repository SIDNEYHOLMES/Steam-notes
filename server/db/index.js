const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const passport = require('passport');
const mongoUri = 'mongodb://localhost/auth';

mongoose.connect(mongoUri)
  .then(() => console.log('connected to mongodb'))
  .catch(err => console.log('error when attempting to connect to mongodb'));

  const UserSchema = new Schema({ 
    _id: Number,
    name: String,
    steamId: String,
    games: Array,
    steamGames: Array,
  });

  const User = model('User', UserSchema);

module.exports = User;