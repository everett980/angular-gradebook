'use strict';
var router = require('express').Router();
var mongoose = require('mongoose');
require("../../db/models/group");
var Group = mongoose.model('Group');

//read all
router.get('/', function(req, res, next){
    Group.find().exec()
    .then(function(results){
        res.send(results);
    });
});

//create
router.post('/', function(req, res, next){
    Group.create(req.body)
    .then(function(result){
        res.status(201).send(result);
    });
});

//read one
router.get('/:groupId', function(req, res, next){
    Group.findOne({ _id: req.params.groupId } ).exec()
    .then(function(result){
        res.send(result);
    });
});

router.put('/:groupId', function(req, res, next){
    Group.update({ _id: req.params.groupId}, req.body, {upsert: true}, function(err) {
        if(!err){
            res.status(200).send();
        } else {
            console.error(err);
            res.status(404).send();
        }
    });
});


//delete
router.delete('/:groupId', function(req, res, next){
    Group.findOne({ _id: req.params.groupId } ).remove().exec()
    .then(function(result){
        res.sendStatus(200);
    });
});


module.exports = router;
