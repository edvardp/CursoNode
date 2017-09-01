function Noticia(titulo, texto) {
    this.titulo = titulo;
    this.texto = texto;
}

Noticia.prototype.listNoticias = (connection) => {
    return new Promise((resolve, reject) => {
        const queryString = 'SELECT * FROM noticias;';
        connection.query(queryString, (error, result) => {
            if (error) {
                return reject(error);
            } else {
                resolve(result);
            }
        });
    });
}

Noticia.prototype.getNoticia = (connection, id) => {
    return new Promise((resolve, reject) => {
        const queryString = `SELECT * FROM noticias s WHERE s.id = ${id};`;
        connection.query(queryString, (error, result) => {
            if (error) {
                return reject(error);
            } else {
                result = result[0];
                resolve(result);
            }
        });
    })
}

Noticia.prototype.insertNoticia = (connection, params) => {
    noticia = new Noticia(params.titulo, params.texto);
    return new Promise((resolve, reject) => {
        const queryString = `INSERT INTO noticias (titulo, texto) VALUES ('${noticia.titulo}', '${noticia.texto}');`;
        //const query = 'INSERT INTO noticias SET ?;';
        connection.query(queryString, (error, result) => {
            if (error) {
                return reject(error);
            } else {
                result = "Notícia cadastrada com sucesso!";
                resolve(result);
            }
        });
    });
}


module.exports = () => Noticia;
