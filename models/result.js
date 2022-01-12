const { sequelize, DataTypes } = require('sequelize');

const Result = sequelize.define('Result', {
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
    Sub1: {
        type: DataTypes.INTEGER
    },
    Sub2: {
        type: DataTypes.INTEGER
    },
    Sub3: {
        type: DataTypes.INTEGER
    },
    Sub4: {
        type: DataTypes.INTEGER
    },
    Sub5: {
        type: DataTypes.INTEGER
    },
    Sub6: {
        type: DataTypes.INTEGER
    },
    Sub7: {
        type: DataTypes.INTEGER
    },
    Sub8: {
        type: DataTypes.INTEGER
    },
    Sub8: {
        type: DataTypes.INTEGER
    },
    Sub9: {
        type: DataTypes.INTEGER
    },
    Sub10: {
        type: DataTypes.INTEGER
    },
    Total: {
        type: DataTypes.INTEGER
    },
    Result: {
        type: DataTypes.STRING
    }
});

console.log(Result === sequelize.model.Result)