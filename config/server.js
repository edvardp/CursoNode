(function () {
    const express = require('express');
    const consign = require('consign');
    const bodyParser = require('body-parser');

    const app = express();

    app.set('port', 9000);
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    app.use(bodyParser.urlencoded({ extended: true }));

    consign()
        .include('config/dbConnection.js')
        .then('./app/models')
        .then('./app/routes')
        .into(app);

    module.exports = app;
})();

