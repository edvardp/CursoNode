(() => {
    module.exports = (app) => {

        // const noticiaService = require('../services/noticia.service')(app);
        const connection = app.config.dbConnection();
        var NoticiaDAO = new app.app.models.NoticiaDAO(connection);

        app.get('/noticias/', (req, res) => {
            var message = req.params.message;
            NoticiaDAO.listNoticias(connection)
                .then((response) => {
                    res.render('noticias/index', { noticias: response, mensagem: message });
                });
        });

        app.get('/noticias/detalhes/:id', (req, res) => {
            var id = req.params.id;
            NoticiaDAO.getNoticia(connection, id)
                .then((response) => {
                    res.render('noticias/detalhes', { noticia: response });
                });
        });

        app.get('/noticias/cadastro', (req, res) => {
            res.render('noticias/cadastro');
        });

        app.post('/noticias/cadastrar', (req, res) => {
            var params = { titulo: req.body.titulo, texto: req.body.texto };
            NoticiaDAO.insertNoticia(connection, params)
                .then((response) => {
                    res.redirect('/noticias');
                });
        });
    }
})();
