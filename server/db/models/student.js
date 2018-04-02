const db = require('../index');
const Sequelize = require('sequelize');

module.exports = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.VIRTUAL,
    get () {
      return this.getDataValue('firstName') + ' ' + this.getDataValue('lastName');
    }
  },
  email: {
    type: Sequelize.VIRTUAL,
    get () {
      return this.getDataValue('firstName') + this.getDataValue('lastName') + '@wagstaff.edu';
    }
  },
  studentImg: Sequelize.STRING,
  gpa: {
    type: Sequelize.DECIMAL,
    validate: {
      min: 0.0,
      max: 4.0
    }
  }
});
