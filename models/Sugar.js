const Sequelize = require('sequelize');
const db = require('../config/database');

const Sugar = db.define('sugar', {
    result: {
        type: Sequelize.INTEGER
    },
})

Sugar.sync().then(() => {
    console.log(' Sugar table created');
});

module.exports = Sugar;