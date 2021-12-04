const { render } = require('ejs');
const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

router.get('/', (req, res)=>{
    res.render('index');
});

router.get('/nosotros', (req, res)=>{
    res.render('nosotros');
});

router.get('/iniciarsesion', (req, res)=>{
    res.render('iniciarsesion');
});

router.get('/registro', (req, res)=>{
    res.render('registro');
});

router.get('/registrodis', (req, res)=>{
    res.render('registrodis');
});

router.get('/registrodoc', (req, res)=>{
    res.render('registrodoc');
});

router.get('/registrodocb', (req, res)=>{
    res.render('registrodocb');
});

router.get('/terminosycondiciones', (req, res)=>{
    res.render('terminosycondiciones');
});

router.get('/homedis', (req, res)=>{
    res.render('homedis');
});

router.get('/homedoc', (req, res)=>{
    res.render('homedoc');
});

router.get('/educaciondis', (req, res)=>{
    conexion.query('SELECT * FROM educacion', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('educaciondis', {results:results});
        }
    });
});

router.get('/menucursosdis', (req, res)=>{
    conexion.query('SELECT * FROM curso', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('menucursosdis', {results:results});
        }
    });
});

router.get('/usuariodis', (req, res)=>{
    res.render('usuariodis');
});

router.get('/educaciondoc', (req, res)=>{
    conexion.query('SELECT * FROM educacion', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('educaciondoc', {results:results});
        }
    });
});

router.get('/menucursosdoc', (req, res)=>{
    conexion.query('SELECT * FROM curso', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('menucursosdoc', {results:results});
        }
    });
});

router.get('/fabricadecursos', (req, res)=>{
    res.render('fabricadecursos');
});

router.get('/usuariodoc', (req, res)=>{
    res.render('usuariodoc');
});

router.get('/fabricadeeducacion', (req, res)=>{
    res.render('fabricadeeducacion');
});

router.get('/editareducacion/:id_edu', (req, res)=>{
    const id_edu = req.params.id_edu;
    conexion.query('SELECT * FROM educacion WHERE id_edu=?', [id_edu], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('editareducacion', {educacion:results[0]});
        }
    })
});

router.get('/eliminareducacion/:id_edu', (req, res)=>{
    const id_edu = req.params.id_edu;
    conexion.query('DELETE FROM educacion WHERE id_edu = ?', [id_edu], (error, results)=>{
        res.render('/educaciondoc');
    })
});

const crud = require('./controllers/crud');
const { application, json } = require('express');

router.post('/aniadirusudoc', crud.aniadirusudoc);
router.post('/aniadirdoc', crud.aniadirdoc);
router.post('/aniadirusudis', crud.aniadirusudis);
router.post('/aniadireducacion', crud.aniadireducacion);
router.post('/aniadircurso', crud.aniadircurso);
router.post('/aniadirleccion', crud.aniadirleccion);
router.post('/fabricadeleccion', crud.fabricadeleccion);
router.post('/actualizareducacion', crud.actualizareducacion);

module.exports = router;