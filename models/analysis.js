const { sequelize, DataTypes } = require('sequelize');

const Analysis = sequelize.define('Analysis', {
    ExaminationYear: {
        type: DataTypes.DATEONLY
    },
    Branch: {
        type: DataTypes.STRING
    },
    Sem: {
        type: DataTypes.INTEGER
    },
    Subject: {
        type: DataTypes.STRING
    }
});

console.log(Analysis === sequelize.model.Analysis);