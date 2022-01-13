const { sequelize, DataTypes } = require('sequelize');

const Result = sequelize.define('Result', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    USN: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Sem: {
        type: DataTypes.INTEGER
    },

    Total: {
        type: DataTypes.INTEGER
    },
    Result: {
        type: DataTypes.STRING
    },

});

console.log(Result === sequelize.model.Result)