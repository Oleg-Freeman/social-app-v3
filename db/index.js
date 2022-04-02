import config from '../config/index.js';
import { Sequelize } from 'sequelize';

const { dbUser, dbPassword, dbName } = config;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    dialect: 'postgres',
});

export default sequelize;
