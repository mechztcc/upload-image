const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Image = require('../models/Image');

const connection = new Sequelize(dbConfig);

Image.init(connection);


module.exports = connection;