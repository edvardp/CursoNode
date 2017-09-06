(() => {
    module.exports = (app) => {
        app.get('/', (req, res) => {
            console.log(app.app.controllers);
            app.app.controllers.homeController.index(app, req, res);
        });
    }
})();    
