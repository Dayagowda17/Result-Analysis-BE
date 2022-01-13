const { Sequelize, DataTypes } = require('sequelize');

const Faculty = sequelize.define('Faculty', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    kgidno: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING

    },
    dob: {
        type: DataTypes.DATE

    },
    phone: {
        type: DataTypes.STRING
    },

    designation: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.TEXT
    },

});

console.log(Faculty === sequelize.models.Faculty);