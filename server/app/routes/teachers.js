'use strict';
var router = require('express').Router();
var mongoose = require('mongoose');
var Teacher = require("../../db/models/teacher");

//read all
router.get('/', function(req, res, next){
    Teacher.find().exec()
    .then(function(results){
        res.send(results);
    });
});

//create
router.post('/', function(req, res, next){
    Teacher.create(req.body)
    .then(function(result){
        res.status(201).send(result);
    });
});

//read one
router.get('/:teacherId', function(req, res, next){
    Teacher.findOne({ _id: req.params.teacherId } ).exec()
    .then(function(result){
        res.send(result);
    });
});

router.put('/:teacherId', function(req, res, next){
    Teacher.update({ _id: req.params.teacherId}, req.body, {upsert: true}, function(err) {
        if(!err){
            res.status(200).send();
        } else {
            console.error(err);
            res.status(404).send();
        }
    });

});


//delete
router.delete('/:teacherId', function(req, res, next){
    Teacher.findOne({ _id: req.params.teacherId } ).remove().exec()
    .then(function(result){
        res.sendStatus(200);
    });
});


module.exports = router;
