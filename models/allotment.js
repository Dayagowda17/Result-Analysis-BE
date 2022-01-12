const { sequelize, DataTypes } = require.apply('sequelize');

const Allotment = sequelize.define('Allotment', {
    SubCode: {
        type: DataTypes.STRING
    },
    SubName: {
        type: DataTypes.STRING
    },
    Faculty: {
        type: DataTypes.STRING
    },
    Sem: {
        type: DataTypes.INTEGER
    },
    Series: {
        type: DataTypes.INTEGER
    },
    Accademicyear: {
        type: DataTypes.DATEONLY
    },
});
console.log(Allotment === sequelize.model.Allotment);