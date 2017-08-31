(function () {

    const app = require('./config/server');

    //Run
    app.listen(app.get('port'), () => {
        console.log(`Servidor executando na porta ${app.get('port')}`);
    });

})();