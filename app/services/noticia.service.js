(() => {

    const db = require('../../config/database');
    const service = {
        listNoticias
    }

    function listNoticias(callback) {
        var queryResult;
        console.log(callback);
        db.query('select * from noticias', (error, result) => {
            if (error) {
                callback(error);
            } else {
                callback(result);
            }
        });
    }

    module.exports = service;

})();