'use strict';
var router = require('express').Router();
var mongoose = require('mongoose');
require("../../db/models/course");
var Course = mongoose.model('Course');

//read all
router.get('/', function(req, res, next){
    Course.find().exec()
    .then(function(results){
        res.send(results);
    });
});

//create
router.post('/', function(req, res, next){
    Course.create(req.body)
    .then(function(result){
        res.status(201).send(result);
    });
});

//read one
router.get('/:courseId', function(req, res, next){
    Course.findOne({ _id: req.params.courseId } ).exec()
    .then(function(result){
        res.send(result);
    });
});

router.put('/:courseId', function(req, res, next){
    Course.update({ _id: req.params.courseId}, req.body, {upsert: true}, function(err) {
        if(!err){
            res.status(200).send();
        } else {
            console.error(err);
            res.status(404).send();
        }
    });

});


//delete
router.delete('/:courseId', function(req, res, next){
    Course.findOne({ _id: req.params.courseId } ).remove().exec()
    .then(function(result){
        res.sendStatus(200);
    });
});


module.exports = router;
