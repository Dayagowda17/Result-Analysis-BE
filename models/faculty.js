const { Sequelize, DataTypes } = require('sequelize');

const Faculty = sequelize.define('Faculty', {

    KGID_NO: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    Name: {
        type: DataTypes.STRING

    },
    DOB: {
        type: DataTypes.DATE

    },
    PhoneNumber: {
        type: DataTypes.BIGINT
    },

    Designation: {
        type: DataTypes.STRING
    },
    Address: {
        type: DataTypes.STRING
    }
});


// `sequelize.define` also returns the model
console.log(Faculty === sequelize.models.Faculty); // true