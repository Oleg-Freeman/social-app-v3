const env = process.env.NODE_ENV || 'default';

const config = require(`./${env}`);

module.exports = config;
