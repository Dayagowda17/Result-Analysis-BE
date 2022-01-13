const { Sequelize, DataTypes } = require('sequelize');

const Allotment = sequelize.define('Allotment', {
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
console.log(Allotment === sequelize.model.Allotment);