const { Sequelize, DataTypes } = require('sequelize');
<<<<<<< HEAD
=======
const faculty = require('./faculty');
>>>>>>> 15831eb55646b9c4e36051ef9a7f9194e7491595

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
<<<<<<< HEAD
    return Subject;
}
=======
    db.models.Faculty.belongsToMany(Subject,{through:"AssignedSubjects"})
    Subject.belongsTo(db.models.Faculty,{through:"AssignedSubjects"})
    return Subject;
}
           
>>>>>>> 15831eb55646b9c4e36051ef9a7f9194e7491595
