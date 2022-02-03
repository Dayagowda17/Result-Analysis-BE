const { Sequelize, DataTypes } = require('sequelize');
module.exports = async(db) => {
    const Student = db.define('Student', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        usn: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sem: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dob: {
            type: DataTypes.DATE,
            allowNull: false
        },
        father_name: {
            type: DataTypes.STRING
        },
        mother_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        branch: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },

    });
    await Student.sync({ force: false });
    return Student;
}
