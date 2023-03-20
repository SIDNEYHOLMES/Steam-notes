const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const mongoUri = 'mongodb://localhost/steam-notes';

mongoose.connect(mongoUri)
  .then(() => console.log('connected to mongodb'))
  .catch(err => console.log('error when attempting to connect to mongodb'));

  const UserSchema = new Schema({ 
    displayName: { type: String, required: true},
    steamId: { type: String, required: true },
    profileUrl: { type: String, required: true },
  });


  const User = model('User', UserSchema);

module.exports = User;