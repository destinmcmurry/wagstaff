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

// apiRouter.delete('/:id', (req, res, next) => {

//   console.log('params', req.params.id);
//   console.log('body', req.body);
//   const id = req.params.id;

//   return Students.destroy({ where: { homeroomId: id } })
//     .then(Homerooms.destroy({ where: { id } }))
//     .then(() => res.status(204))
//     .then((res.redirect('/')))
//     .catch(next);
// })


module.exports = apiRouter;