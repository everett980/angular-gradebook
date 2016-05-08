'use strict';
var router = require('express').Router();
var mongoose = require('mongoose');
var MasterAssignment = require("../../../db/models/masterAssignment");

//read all
router.get('/', function(req, res, next){
    MasterAssignment.find().exec()
    .then(function(results){
        res.send(results);
    });
});

//create
router.post('/', function(req, res, next){
    MasterAssignment.create(req.body)
    .then(function(result){
        res.status(201).send(result);
    });
});

//read one
router.get('/:masterAssignmentId', function(req, res, next){
    MasterAssignment.findOne({ _id: req.params.masterAssignmentId } ).exec()
    .then(function(result){
        res.send(result);
    });
});

router.put('/:masterAssignmentId', function(req, res, next){
    MasterAssignment.update({ _id: req.body}, upsertData, {upsert: true}, function(err) {
        if(!err){
            res.status(200).send();
        } else {
            console.error(err);
            res.status(404).send();
        }
    });

});


//delete
router.delete('/:masterAssignmentId', function(req, res, next){
    MasterAssignment.findOne({ _id: req.params.masterAssignmentId } ).remove().exec()
    .then(function(result){
        res.sendStatus(200);
    });
});


module.exports = router;
