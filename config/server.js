(() => {
    const express = require('express');
    const consign = require('consign');
    const bodyParser = require('body-parser');
    const validator = require('node-validator');
    const expressValidator = require('express-validator');

    const app = express();

    app.set('port', 9000);
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    //parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));


    // add express validation methods to request
    app.use(expressValidator());

    consign()
        .include('config/dbConnection.js')
        .then('./app/models')
        .then('./app/controllers')
        .then('./app/routes')
        .into(app);

    module.exports = app;
})();

