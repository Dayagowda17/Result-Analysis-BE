const { Sequelize, DataTypes } = require('sequelize');
const Student = sequelize.define('Student', {
    // Model attributes are defined here
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    USN: {
        type: DataTypes.STRING,
        allowNull: false

    },
    Sem: {
        type: DataTypes.INTEGER
    },
    DOB: {
        type: DataTypes.DATEONLY
    },
    FatherName: {
        type: DataTypes.STRING
    },
    MotherName: {
        type: DataTypes.STRING
    },
    Branch: {
        type: DataTypes.STRING
    },
    Address: {
        type: DataTypes.STRING
    },
    Gender: {
        type: DataTypes.STRING
    },
    Phone: {
        type: DataTypes.BIGINT
    },
    Email: {
        type: DataTypes.STRING
    }

});



console.log(Student === sequelize.models.Student); // true