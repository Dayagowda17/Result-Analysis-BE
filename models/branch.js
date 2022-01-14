const { Sequelize, DataTypes } = require('sequelize');
module.exports = (db) => {
    const Branch=db.define('Branch', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        branch_name: {
            type: DataTypes.STRING
        },
        branch_short_name: {
            type: DataTypes.STRING
        }
    });
   return Branch;
}

