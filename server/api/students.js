const apiRouter = require('express').Router();
const { Student } = require('../db/models/index');
const Sequelize = require('sequelize');

apiRouter.get('/:id', (req, res, next) => {
  const studentId = req.params.id;
  Student.findById(studentId)
    .then(student => res.json(student))
    .catch(next);
})

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