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
  // not redirecting, giving me a 404 
    .then(res.redirect('/students/'))
    .catch(next);

});

module.exports = apiRouter;