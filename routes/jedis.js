var express = require('express');
var router = express.Router();
var connection = 'mongodb://ryan:mean@ds121575.mlab.com:21575/mean';

var mongoose = require('mongoose');
var Jedi = require('../models/jedi.model');

mongoose.connect(connection);

router.get('/jedis', function(req, res, next) {
    Jedi.find(function(err, jedis) {
        if (err)
            res.send(err);
        else
            res.json(jedis);
    });
});

router.post('/addjedi', function(req, res, next) {
    var jedi = req.body;
    Jedi.create(jedi, function(err, jedi) {
        return res.json({status: 'success', jedi:jedi})
    });
});

router.delete('/deletejedi', function(req, res, next) {
    var name = req.query.name;
    Jedi.findOne({'name': name}).exec(function(err, jedi) {
       console.log(jedi);
       jedi.remove(function() {
            return res.json ({status: 'success'})
       });
    });
});

router.post('/getjedibyname', function(req, res, next) {
    var name = req.body.name;
    Jedi.findOne({'name': name}).exec(function(err, jedi) {
        return res.json ({status: 'success'})
    });
});

router.post('/updatejedi', function(req, res, next) {
    //console.log(req);
    var jedi = req.body.jedi;
    var name = req.body.name;
    console.log(name);
    console.log(jedi);
    Jedi.findOneAndUpdate({name: name}, jedi, {new: true}, function(err, jedi) {
        return res.json ({status: 'success', jedi: jedi})
    });
});

module.exports = router;