const { Sequelize, DataTypes } = require('sequelize');
let sequelize;
module.exports.initModel = (db) => {
    sequelize = db
}
const Subject = Sequelize.define('Subject', {
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


console.log(Subject === Sequelize.model.Subject);