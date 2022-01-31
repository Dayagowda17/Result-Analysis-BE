const { Sequelize, DataTypes } = require('sequelize');
module.exports = (db) => {
    const Faculty = db.define('Faculty', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        kgidno: {
<<<<<<< HEAD
            type: DataTypes.INTEGER,
=======
            type: DataTypes.BIGINT,
>>>>>>> 15831eb55646b9c4e36051ef9a7f9194e7491595
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dob: {
            type: DataTypes.DATE,
            allowNull: false

        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },

        designation: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: false
        },

    });
<<<<<<< HEAD

=======
>>>>>>> 15831eb55646b9c4e36051ef9a7f9194e7491595
    return Faculty;
}