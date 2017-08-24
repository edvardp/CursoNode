(() => {
    module.exports = (app) => {

        const noticiaService = require('../services/noticia.service');

        app.get('/noticias', (req, res) => {
            noticiaService.listNoticias(res.send);
        });

        app.get('/noticias/cadastro', (req, res) => {
            res.render('admin/noticias/cadastro');
        });

    }
})();
