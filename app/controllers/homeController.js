(() => {
    module.exports = function(app) {

        this.index = function (app, req, res) {
            res.render('home/index');
        }

        return this;
    }
})();