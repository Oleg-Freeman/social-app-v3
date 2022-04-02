const config = require('./index.js');

const { dbUser, dbPassword, dbName, dbPort, dbHost } = config;

module.exports = {
    development: {
        username: dbUser,
        password: dbPassword,
        database: dbName,
        host: dbHost,
        port: Number(dbPort),
        dialect: 'postgres',
        dialectOptions: {
            bigNumberStrings: true,
        },
    },
};
