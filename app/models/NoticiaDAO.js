(() => {
    class NoticiaDAO {
        constructor(connection){
            console.log(connection.query);
            this._connection = connection;
        }
    }

    NoticiaDAO.prototype.listNoticias = function() {
        console.log(this)
        return new Promise((resolve, reject) => {
            const queryString = 'SELECT * FROM noticias;';
            this._connection.query(queryString, (error, result) => {
                if (error) {
                    return reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    }

    NoticiaDAO.prototype.getNoticia = function(id)  {
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

    NoticiaDAO.prototype.insertNoticia = function(params)  {
        return new Promise((resolve, reject) => {
            const queryString = `INSERT INTO noticias (titulo, texto) VALUES ('${params.titulo}', '${params.texto}');`;
            //const query = 'INSERT INTO noticias SET ?;';
            this._connection.query(queryString, (error, result) => {
                if (error) {
                    return reject(error);
                } else {
                    result = "Notícia cadastrada com sucesso!";
                    resolve(result);
                }
            });
        });
    }

    module.exports = () => {
        return NoticiaDAO;
    }
})();


