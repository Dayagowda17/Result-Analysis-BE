const { Sequelize, DataTypes } = require('sequelize');
module.exports = async(db) => {
    const Subject = db.define('Subject', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        subject_code: {
            type: DataTypes.STRING
        },
        subject_name: {
            type: DataTypes.STRING
        },
        schema_year: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
    });
    db.models.Faculty.belongsToMany(Subject,{through:"AssignedSubjects"})
    Subject.belongsTo(db.models.Faculty,{through:"AssignedSubjects"})
    await Subject.sync({ force: false });
    return Subject;
}
           

