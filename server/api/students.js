const apiRouter = require('express').Router();
const { Student } = require('../db/models/index');
const Sequelize = require('sequelize');

apiRouter.get('/', (req, res, next) => {
  Student.findAll()
  .then(students => res.json(students))
  .catch(next);
});

apiRouter.post('/', (req, res, next) => {
  return Student.create(req.body)
    .then(createdStudent => res.json(createdStudent))
    .catch(next)
});

module.exports = apiRouter;