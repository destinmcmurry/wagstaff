const apiRouter = require('express').Router();
const { Student } = require('../db/models/index');
const Sequelize = require('sequelize');

apiRouter.get('/', (req, res, next) => {
  Student.findAll()
  .then(students => res.json(students))
  .catch(next);
});

module.exports = apiRouter;