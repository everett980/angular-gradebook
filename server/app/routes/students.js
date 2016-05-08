'use strict';
var router = require('express').Router();
var mongoose = require('mongoose');
var Student = require("../../../db/models/student");

//read all
router.get('/', function(req, res, next){
    Student.find().exec()
    .then(function(results){
        res.send(results);
    });
});

//create
router.post('/', function(req, res, next){
    Student.create(req.body)
    .then(function(result){
        res.status(201).send(result);
    });
});

//read one
router.get('/:studentId', function(req, res, next){
    Student.findOne({ _id: req.params.studentId } ).exec()
    .then(function(result){
        res.send(result);
    });
});

router.put('/:studentId', function(req, res, next){
    Student.update({ _id: req.params.studentId}, req.body, {upsert: true}, function(err) {
        if(!err){
            res.status(200).send();
        } else {
            console.error(err);
            res.status(404).send();
        }
    });

});


//delete
router.delete('/:studentId', function(req, res, next){
    Student.findOne({ _id: req.params.studentId } ).remove().exec()
    .then(function(result){
        res.sendStatus(200);
    });
});


module.exports = router;
