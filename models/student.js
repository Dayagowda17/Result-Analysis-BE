const { Sequelize, DataTypes } = require('sequelize');
const Student = sequelize.define('Student', {

    id: {
        type: Sequelize.INTEGER,
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
        type: DataTypes.INTEGER
    },
    dob: {
        type: DataTypes.DATEONLY
    },
    father_name: {
        type: DataTypes.STRING
    },
    mother_name: {
        type: DataTypes.STRING
    },
    branch: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.TEXT
    },
    gender: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },

});



console.log(Student === sequelize.models.Student); // true