const express    = require('express');
const bodyParser = require('body-parser');
const path       = require('path');
const app        = express();
const title      = 'Gold Coast Runners Club';
const arr        = [{name: 'damon'}, {name: 'bob'}];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// Basic Router
app.get('/', function(req, res){
    res.render('index', {
        title: title,
        data: arr
    });
});


app.post('/contact', function(req, res){
    console.log(req.body);
});


// Server listening
app.listen(3000, function(){
    console.log('Started server listening on port 3000...');
});