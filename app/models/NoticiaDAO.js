(() => {
    class NoticiaDAO {
        constructor(app) {
            this._connection = app.config.dbConnection();
        }
    }

    NoticiaDAO.prototype.listNoticias = function () {
        return new Promise((resolve, reject) => {
            const queryString = 'SELECT * FROM noticias ORDER BY datacadastro DESC;';
            this._connection.query(queryString, (error, result) => {
                if (error) {
                    return reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    }

    NoticiaDAO.prototype.getNoticia = function (id) {
        return new Promise((resolve, reject) => {
            const queryString = `SELECT * FROM noticias s WHERE s.id = ${id};`;
            this._connection.query(queryString, (error, result) => {
                if (error) {
                    return reject(error);
                } else {
                    result = result[0];
                    resolve(result);
                }
            });
        })
    }

    NoticiaDAO.prototype.insertNoticia = function (params) {
        return new Promise((resolve, reject) => {
            // const queryString = `INSERT INTO noticias (titulo, texto) VALUES ('${params.titulo}', '${params.texto}');`;
            const queryString = 'INSERT INTO noticias SET ?;';
            this._connection.query(queryString, params, (error, result) => {
                if (error) {
                    return reject(error);
                } else {
                    result = "Notícia cadastrada com sucesso!";
                    resolve(result);
                }
            });
        });
    }

    NoticiaDAO.prototype.listNoticiasByQuantity = function (params) {
        return new Promise((resolve, reject) => {
            const queryString = `SELECT * FROM noticias ORDER BY datacadastro DESC LIMIT ${params};`;
            this._connection.query(queryString, params, (error, result) => {
                if (error) {
                    return reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    }

    module.exports = () => {
        return NoticiaDAO;
    }
})();


