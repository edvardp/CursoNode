(function () {

    const app = require('./config/server');

    //Routes
    require('./app/routers/home.router')(app);
    require('./app/routers/noticias.router')(app);

    //Run
    app.listen(app.get('port'), () => {
        console.log(`Servidor executando na porta ${app.get('port')}`);
    });

})();