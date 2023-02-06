const express = require('express');
const path = require('path')
const session = require('express-session')
const rootRouter = require('./routes');

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