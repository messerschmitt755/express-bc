var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var jedis = require('./routes/jedis');

var port = 3000;
var app= express();

app.set('view dir', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });

//app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//app.use('/', index);
app.use('/api', jedis);

app.listen(port, function() {
    console.log('Server started on: ' + port);
});