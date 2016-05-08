'use strict';
var router = require('express').Router();
var mongoose = require('mongoose');
var Assignment = require("../../../db/models/assignment");

//read all
router.get('/', function(req, res, next){
    Assignment.find().exec()
    .then(function(results){
        res.send(results);
    });
});

//create
router.post('/', function(req, res, next){
    Assignment.create(req.body)
    .then(function(result){
        res.status(201).send(result);
    });
});

//read one
router.get('/:assignmentId', function(req, res, next){
    Assignment.findOne({ _id: req.params.assignmentId } ).exec()
    .then(function(result){
        res.send(result);
    });
});

router.put('/:assignmentId', function(req, res, next){
    var updatedAssignment = new Assignment(req.body)
    var upsertData = updatedAssignment.toObject();

    delete upsertData._id;

    Assignment.update({ _id: req.params.assignmentId}, upsertData, {upsert: true}, function(err) {
        if(!err){
            res.status(200).send();
        } else {
            console.error(err);
            res.status(404).send();
        }
    });

});


//delete
router.delete('/:assignmentId', function(req, res, next){
    Assignment.findOne({ _id: req.params.assignmentId } ).remove().exec()
    .then(function(result){
        res.sendStatus(200);
    });
});


module.exports = router;