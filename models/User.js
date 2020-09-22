const Sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('user', {
    userName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
        },
    },
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER,
        validate: {
            min: 18
        },
    },
    email: {
        type: Sequelize.STRING
    }
}); 
    
User.associate = (models) => {
    User.hasMany(models.Sugar);
    User.hasMany(models.Pressure);
    User.hasOne(models.VaccinationRecord);
};

//user can use either userName or email to login
User.findByLogin = async login => {
    let user = await User.findOne({
      where: { username: login },
    });
 
    if (!user) {
      user = await User.findOne({
        where: { email: login },
      });
    }
 
    return user;
};

User.sync().then(() => {
    console.log('User table created');
});

module.exports = User;