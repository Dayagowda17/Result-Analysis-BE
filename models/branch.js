const { Sequelize, DataTypes } = require('sequelize');
module.exports = (db) => {
    const Branch = db.define('Branch', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        branch_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        branch_short_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Branch;
}