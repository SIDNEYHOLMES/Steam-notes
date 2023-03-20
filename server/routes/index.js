const express = require("express");

const rootRouter = express.Router();

//route imports
const steam = require("./steam.routes");
const user = require('./user.routes')

rootRouter.use('/steam', steam);
rootRouter.use('/user', user)

module.exports = rootRouter 