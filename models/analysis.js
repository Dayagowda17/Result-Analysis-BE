const { sequelize, DataTypes } = require('sequelize');

const Analysis = sequelize.define('Analysis', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    examination_year: {
        type: DataTypes.NUMBER
    },
    branch: {
        type: DataTypes.STRING
    },
    sem: {
        type: DataTypes.INTEGER
    },
    subject: {
        type: DataTypes.STRING
    },

});

console.log(Analysis === sequelize.model.Analysis);