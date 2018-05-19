const express    = require('express');
const bodyParser = require('body-parser');
const path       = require('path');
const app        = express();
const index      = require('./routes/index');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules/angular')));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', index);

app.listen(3000, function(){
    console.log('Started server listening on port 3000...');
});