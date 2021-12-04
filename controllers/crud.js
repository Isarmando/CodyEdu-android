const conexion = require('../database/db');

exports.aniadirusudoc = (req, res)=>{
    const tipou = 1;
    const usu = req.body.usu;
    const contra = req.body.contra;
    const correo = req.body.correo; 
    const fnacimiento = req.body.fnacimiento;
    conexion.query('INSERT INTO usuario SET ?', {tipou, usu, contra, correo, fnacimiento}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            conexion.query('SELECT * FROM usuario ORDER BY id_usuario DESC LIMIT 1', (error, resultsb)=>{
                if(error){
                    console.log(error);
                }else{
                    resultsb.forEach(element => {
                        var dato = element.id_usuario;
                        res.render('registrodocb', { dato });
                    });
                }
            });
        }
    });
}

exports.aniadirdoc = (req, res)=>{
    const nempleado = req.body.nempleado;
    const id_usuario = req.body.id_usuario;
    const nombre = req.body.nombre;
    const appat = req.body.appat;
    const apmat = req.body.apmat;
    conexion.query('INSERT INTO docente SET ?', {nempleado, id_usuario, nombre, appat, apmat}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.render('homedoc');
        }
    });
}

exports.aniadirusudis = (req, res)=>{
    const tipou = 0;
    const usu = req.body.usu;
    const contra = req.body.contra;
    const correo = req.body.correo;
    const fnacimiento = req.body.fnacimiento;
    conexion.query('INSERT INTO usuario SET ?', {tipou, usu, contra, correo, fnacimiento}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.render('homedis')
        }
    });
}

exports.aniadireducacion = (req, res)=>{
    const id_usuario = 1;
    const id_img = 1;
    const titulo = req.body.titulo;
    const descripcion = req.body.descripcion;
    const link = req.body.link;
    conexion.query('INSERT INTO educacion SET ?', {id_img, id_usuario, titulo, descripcion, link}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/educaciondoc');
        }
    });
}

exports.actualizareducacion = (req, res)=>{
    const id_usuario = 1;
    const id_img = 1;
    const id_edu = req.body.id_edu;
    const titulo = req.body.titulo;
    const descripcion = req.body.descripcion;
    const link = req.body.link;
    conexion.query('UPDATE educacion SET ? WHERE id_edu = ?',[{id_img, id_usuario, titulo, descripcion, link}, id_edu], (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/educaciondoc');
        }
    });
}

exports.aniadircurso = (req, res)=>{
    const id_img = 1;
    const nempleado = 2018674317;
    const titulo = req.body.titulo;
    const descripcion = req.body.descripcion;
    conexion.query('INSERT INTO curso SET ?', {id_img, nempleado, titulo, descripcion}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/menucursosdoc');
        }
    });
}

exports.fabricadeleccion = (req, res)=>{
    const numero = 1;
    const id_img = 1;
    const nempleado = 2018674317;
    const titulo = req.body.titulo;
    const descripcion = req.body.descripcion;
    if(numero == 1){
        conexion.query('INSERT INTO curso SET ?', {id_img, nempleado, titulo, descripcion}, (error, results)=>{
            if(error){
                console.log(error);
            }else{
                conexion.query('SELECT * FROM curso ORDER BY id_cur DESC LIMIT 1', (errorb, resultsb)=>{
                    if(errorb){
                        console.log(errorb);
                    }else{
                        resultsb.forEach(element => {
                            var id_cur = element.id_cur;
                            conexion.query('INSERT INTO modulo SET ?', {id_cur, numero}, (errorc, resultsc)=>{
                                if(errorc){
                                    console.log(errorc);
                                }else{
                                    conexion.query('SELECT * FROM modulo ORDER BY id_mod DESC LIMIT 1', (errord, resultsd)=>{
                                        if(errord){
                                            console.log(errord);
                                        }else{
                                            resultsd.forEach(elementb => {
                                                var id_mod = elementb.id_mod;
                                                res.render('fabricadeleccion', {id_mod});
                                            });
                                        }
                                    });
                                }
                            });
                        });
                    }
                });
            }
        });
    }else{
        const id_cur = req.body.id_cur;
        conexion.query('INSERT INTO modulo SET ?', {id_cur, numero}, (errorc, resultsc)=>{
            if(errorc){
                console.log(errorc);
            }else{
                conexion.query('SELECT * FROM modulo ORDER BY id_mod DESC LIMIT 1', (errord, resultsd)=>{
                    if(errord){
                        console.log(errord);
                    }else{
                        resultsd.forEach(element => {
                            var id_mod = element.id_mod;
                            res.render('fabricadeleccion', {id_mod});
                        });
                    }
                });
            }
        });
    }
};

exports.aniadirleccion = (req, res)=>{
    const id_img = 1;
    const id_mod = req.body.id_mod;
    const titulo = req.body.titulo;
    var texto = req.body.texto1;
    var posicion = 1;
    conexion.query('INSERT INTO leccion SET ?', {id_mod, titulo}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            conexion.query('SELECT * FROM leccion ORDER BY id_lec DESC LIMIT 1', (errorb, resultsb)=>{
                if(errorb){
                    console.log(errorb);
                }else{
                    resultsb.forEach(element => {
                        var id_lec = element.id_lec;
                        conexion.query('INSERT INTO parrafo SET ?', {id_lec, id_img, texto, posicion}, (errorc, resultsc)=>{
                            if(errorc){
                                console.log(errorc);
                            }else{
                                texto = req.body.texto2;
                                posicion = 2;
                                conexion.query('INSERT INTO parrafo SET ?', {id_lec, id_img, texto, posicion}, (errord, resultsd)=>{
                                    if(errord){
                                        console.log(errord);
                                    }else{
                                        res.render('fabricadeactividades', {id_mod});
                                    }
                                });
                            }
                        });
                    });
                }
            });
        }
    });
}