'use strict';

// if applicable 1st party dependencies goes first
const http = require('http')
// 3rd party dependencies are next
const express = require('express');
const app = express();

// internal modules are next
const notFound = require('./error-handlers/404.js');
const errors = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');
// const PlacesModel = require('./models/places.js');
const placesRoutes = require('./routes/places.js');
const animalsRoutes = require('./routes/animals.js');
// internal constants
const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(animalsRoutes);
app.use(placesRoutes); 
app.use(logger); // now all routes are modular



// run this for everything
app.use('*', notFound);
//error handling middleware is always at the bottom of the file
app.use(errors);


module.exports = {
    server: app,
    start: (port) => {
        app.listen(PORT, () => {
            console.log(`listening on ${port}`);
        });
    }

}