const Sequelize = require('sequelize');

module.exports = new Sequelize('nodeBackend_development', process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'postgres',

    pool: {
        max:5,
        min:0,
        acquire: 30000,
        idle: 10000
    },
})