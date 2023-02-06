const express = require("express");

const rootRouter = express.Router();

//route imports
const steam = require("./steam.routes");

rootRouter.use('/steam', steam);

module.exports = rootRouter 