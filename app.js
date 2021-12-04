const { json } = require('express');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
console.log('Se inicio el engine');
app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({extended:false}));
app.use(express(json));

app.use('/', require('./router'));
console.log('Se inicio el router');
app.set('port', process.env.PORT||3000);
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});