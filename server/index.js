const express = require('express');
const path = require('path')
const session = require('express-session')

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve('client', 'dist')));
app.use(express.json());

app.use(session({
  secret: 'Our little secret.',
  resave: false,
  saveUninitialized: false
}));

app.listen(PORT, () => console.log(`Server listening on port:${PORT}`))