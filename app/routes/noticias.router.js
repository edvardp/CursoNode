(() => {
    module.exports = function(app) {

        app.get('/noticias/', (req, res) => {
            app.app.controllers.noticiaController.index(app, req, res);
        });

        app.get('/noticias/detalhes/:id', (req, res) => {
            app.app.controllers.noticiaController.detalhes(app, req, res);
        });

        app.get('/noticias/cadastro', (req, res) => {
            app.app.controllers.noticiaController.cadastro(app, req, res);
        });

        app.post('/noticias/cadastrar', (req, res) => {
            app.app.controllers.noticiaController.cadastrar(app, req, res);
        });
    }
})();
