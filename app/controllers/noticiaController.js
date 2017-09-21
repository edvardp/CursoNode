(() => {

    module.exports = function(app) {

        const NoticiaDAO = new app.app.models.NoticiaDAO(app);

        this.index = function (app, req, res) {
            NoticiaDAO.listNoticias()
                .then((response) => {
                    res.render('noticias/index', { noticias: response });
                });
        }

        this.detalhes = function (app, req, res) {
            var id = req.params.id;
            NoticiaDAO.getNoticia(id)
                .then((response) => {
                    res.render('noticias/detalhes', { noticia: response });
                });
        }

        this.cadastro = function (app, req, res) {
            res.render('noticias/cadastro', { errors: undefined, noticia: {} });
        }

        this.cadastrar = function (app, req, res) {
            var params = req.body;

            req.assert('titulo', 'Título é obrigatório').notEmpty();
            req.assert('resumo', 'Resumo é obrigatório').notEmpty();
            req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
            req.assert('autor', 'Autor é obrigatório').notEmpty();
            req.assert('datanoticia', 'Data é obrigatória').notEmpty();//.isDate({format: 'YYYY-MM-DD'});
            req.assert('texto', 'Texto da Notícia é obrigatório').notEmpty();
            req.assert('texto', 'Texto da Notícia deve conter entre 10 e 100 caracteres').len(10, 100);

            var errors = req.validationErrors();

            if (errors) {
                res.render('noticias/cadastro', { errors: errors, noticia: params });
                return;
            }

            NoticiaDAO.insertNoticia(params)
                .then((response) => {
                    res.redirect('/noticias');
                });
        }

        return this;
    }
})();

