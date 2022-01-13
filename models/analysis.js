const { Sequelize, DataTypes } = require('sequelize');
let Analysis;
module.exports.initModel = (db) => {
    Analysis = db.define('Analysis', {
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
    console.log(Analysis === db.model.Analysis);
}

module.exports.Model = Analysis;
