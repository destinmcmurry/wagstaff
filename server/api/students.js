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

apiRouter.delete('/:id', (req, res, next) => {
  return Student.destroy({ where: { id: req.params.id } })
    .then(() => res.status(204).end())
    .catch(next);
});

module.exports = apiRouter;