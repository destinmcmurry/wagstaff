const db = require('../index');
const Sequelize = require('sequelize');

module.exports = db.define('homeroom', {
  teacher: {
    type: Sequelize.STRING,
    allowNull: false
  },
  teacherImg: Sequelize.STRING,
  roomNumber: Sequelize.STRING,
  description: Sequelize.TEXT
}); 