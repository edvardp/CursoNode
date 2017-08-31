(() => {
    module.exports = (app) => {

        const connection = app.config.dbConnection();

        this.listNoticias = () => {
            return new Promise((resolve, reject) => {
                const query = 'SELECT * FROM noticias;';
                connection.query(query, (error, result) => {
                    if (error) {
                        return reject(error);
                    } else {
                        resolve(result);
                    }
                });
            });
        }

        this.getNoticia = (idnoticia) => {
            return new Promise((resolve, reject) => {
                const query = `SELECT * FROM noticias s WHERE s.id = ${idnoticia};`;
                connection.query(query, (error, result) => {
                    if (error) {
                        return reject(error);
                    } else {
                        result = result[0];
                        resolve(result);
                    }
                });
            })
        }

        this.insertNoticia = (params) => {
            console.log(params);
            return new Promise((resolve, reject) => {
                const query = `INSERT INTO noticias (titulo, texto) VALUES ('${params.titulo}', '${params.texto}');`;
                connection.query(query, (error, result) => {
                    if (error) {
                        return reject(error);
                    } else {
                        result = "Notícia cadastrada com sucesso!";
                        resolve(result);
                    }
                });
            })
        }

        return this;
    }

})();