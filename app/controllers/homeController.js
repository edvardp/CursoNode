(() => {
    module.exports = function (app) {

        const NoticiaDAO = new app.app.models.NoticiaDAO(app);

        this.index = function (app, req, res) {
            NoticiaDAO.listNoticiasByQuantity(5)
                .then((response) => {
                    console.log(response);
                    res.render('home/index', { noticias: response });
                });
        }

        return this;
    }
})();