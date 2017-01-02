'use strict';
const express = require('express');
const env = process.env.NODE_ENV || 'development';
const config = require('../.config/server/index')[env];
const mongoose = require('mongoose');

// App
const app = express();
app.set('port', config.global.port);
mongoose.connect(`mongodb://${config.mongodb.user}:${config.mongodb.password}@${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.dbname}`);

app.listen(config.global.port, function() {
  console.log(`Listening to port ${config.global.port}`);
});
