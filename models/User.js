const Sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('user', {
    userName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    },
}, {
    classMethods: {
        associate: function(models) {

        }
    }
})

User.sync().then(() => {
    console.log('User table created');
});
module.exports = User;