const { Sequelize, DataTypes } = require('sequelize');
module.exports = (db) => {
    const Faculty = db.define('Faculty', {
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
            type: DataTypes.STRING,
            allowNull: false
        },
        dob: {
            type: DataTypes.DATE,
            allowNull: false

        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },

        designation: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: false
        },

    });
    return Faculty;
}