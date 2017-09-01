(() => {
    module.exports = (app) => {

        // const noticiaService = require('../services/noticia.service')(app);
        const connection = app.config.dbConnection();
        var Noticia = new app.app.models.noticiaModel();

        app.get('/noticias/', (req, res) => {
            var message = req.params.message;
            Noticia.listNoticias(connection)
                .then((response) => {
                    res.render('noticias/index', { noticias: response, mensagem: message });
                });
        });

        app.get('/noticias/detalhes/:id', (req, res) => {
            var id = req.params.id;
            Noticia.getNoticia(connection, id)
                .then((response) => {
                    res.render('noticias/detalhes', { noticia: response });
                });
        });

        app.get('/noticias/cadastro', (req, res) => {
            res.render('noticias/cadastro');
        });

        app.post('/noticias/cadastrar', (req, res) => {
            var params = { titulo: req.body.titulo, texto: req.body.texto };
            Noticia.insertNoticia(connection, params)
                .then((response) => {
                    res.redirect('/noticias');
                });
        });
    }
})();
