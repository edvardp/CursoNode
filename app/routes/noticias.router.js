(() => {
    module.exports = (app) => {

        const noticiaService = require('../services/noticia.service')(app);

        app.get('/noticias/', (req, res) => {
            var message = req.params.message;
            noticiaService.listNoticias()
                .then((response) => {
                    res.render('noticias/index', { noticias: response, mensagem: message });
                });
        });

        app.get('/noticias/detalhes/:id', (req, res) => {
            var id = req.params.id;
            noticiaService.getNoticia(id)
                .then((response) => {
                    res.render('noticias/detalhes', { noticia: response });
                })

        });

        app.get('/noticias/cadastro', (req, res) => {
            res.render('noticias/cadastro');
        });

        app.post('/noticias/cadastrar', (req, res) => {
            var params = { titulo: req.body.titulo, texto: req.body.texto };
            noticiaService.insertNoticia(params)
                .then((response) => {
                    res.redirect(`/noticias/${response}`);
                });
        });
    }
})();
