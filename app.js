const { json } = require('express');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({extended:false}));
app.use(express(json));

app.use('/', require('./router'));

app.set('port', process.env.PORT||5000);
