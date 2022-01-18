const { Sequelize, DataTypes } = require('sequelize');

module.exports = (db) => {
    const Subject = db.define('Subject', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        subject_code: {
            type: DataTypes.STRING
        },
        subject_name: {
            type: DataTypes.STRING
        },
        schema_year: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    });
    return Subject;
}