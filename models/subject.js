const { Sequelize, DataTypes } = require('sequelize');

const Subject = Sequelize.define('Subject', {
    SubjectCode: {
        type: DataTypes.STRING
    },
    SubjectName: {
        type: DataTypes.STRING

    },
    Schema_Year: {
        type: DataTypes.DATE
    }
});


console.log(Subject === Sequelize.model.Subject);