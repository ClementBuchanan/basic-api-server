'use strict';

// if applicable 1st party dependencies goes first
const http = require('http')
// 3rd party dependencies are next
const express = require('express');
const app = express();

// internal modules are next
const notFound = requires('./error-handlers/404.js');
const errors = required('./error-handlers/500.js');
const logger = require('./middleware/logger.js');

// internal constants
const PORT = process.env.PORT || 3333;

// run this for everything
app.use('*', notFound);
app.use(error);


module.exports = {
    server: app,
    start: (port) => {
        app.listen(PORT, () => {
            console.log(`listening on ${port}`);
        });
    }

}