const { Sequelize, DataTypes } = require('sequelize');
module.exports = (db) => {
     const Allotment = db.define('Allotment', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        sub_code: {
            type: DataTypes.STRING
        },
        sub_name: {
            type: DataTypes.STRING
        },
        faculty: {
            type: DataTypes.STRING
        },
        sem: {
            type: DataTypes.INTEGER
        },
        series: {
            type: DataTypes.INTEGER
        },
        accademic_year: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },

    });
    return Allotment;
}
