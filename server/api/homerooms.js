const apiRouter = require('express').Router();
const { Homeroom } = require('../db/models/index');
const Sequelize = require('sequelize');


apiRouter.get('/', (req, res, next) => {
  Homeroom.findAll()
    .then(homerooms => res.json(homerooms))
    .catch(next);
});

apiRouter.post('/', (req, res, next) => {
  return Homeroom.create(req.body)
    .then(createdHomeroom => res.json(createdHomeroom))
    .catch(next);
});

apiRouter.delete('/:id', (req, res, next) => {
  return Homeroom.destroy({ where: { id: req.params.id } })
    .then(() => res.status(204).end())
    .catch(next);
});

module.exports = apiRouter;