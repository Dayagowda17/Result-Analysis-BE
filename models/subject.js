const { Sequelize, DataTypes } = require('sequelize');
const faculty = require('./faculty');

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
    db.models.Faculty.belongsToMany(Subject,{through:"AssignedSubjects"})
    Subject.belongsTo(db.models.Faculty,{through:"AssignedSubjects"})
    return Subject;
}
           