(function () {
    const express = require('express');
    const app = express();
    app.set('port', 5000);
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    module.exports = app;
})();

