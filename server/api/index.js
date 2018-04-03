'use strict'

const apiRouter = require('express').Router();

apiRouter.use('/homerooms', require('./homerooms'));
apiRouter.use('/students', require('./students'));

module.exports = apiRouter;