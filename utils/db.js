const { Sequelize } = require('sequelize');
const fs = require('fs');
const modelDirectory = './models';
const config = require('../config');
const db = {};
db.init = async() => {
    try {
        let sequelize = new Sequelize(config.db_name, config.db_user, config.db_password, {
            host: 'localhost',
            dialect: 'postgres',
            pool: {
                max: 5,
                min: 0,
                idle: 10000
            },

        });
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        fs.readdir(modelDirectory, (err, files) => {
            files.forEach(file => {
                const model = require(`../models/${file}`)(sequelize);
                db[model.name] = model;
            });
        });

        Object.keys(db).filter((modelName) => {
            const { associate } = db[modelName];
            return associate && {}.toString.call(associate) === '[object Function]';
        }).forEach((modelName) => {
            db[modelName].associate(db);
        });
        db.sequelize = sequelize;
        db.Sequelize = Sequelize;
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

}
module.exports = db;