'use strict';
var router = require('express').Router();
var mongoose = require('mongoose');
require("../../db/models/assignment");
var Assignment = mongoose.model('Assignment');

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

//get all grades with tags for a student
router.get('/student/:studentId', (req, res, next) => {
	Assignment.find({}).exec()
	.then(function(allAssignments) {
		const mastersWithScore = allAssignments.reduce(function(prev, curr) {
			const studentScore = curr.studentScores.filter(function(score) {
				return score.studentRef == req.params.studentId;
			});
			if(studentScore.length) {
				prev.push({
					masterId: curr.masterAssignment,
					score: studentScore[0].score
				})
			}
			return prev;
		}, []);
		const MasterAssignment = mongoose.model('MasterAssignment');
		var foundShit = Promise.all( mastersWithScore.map(function(masterScore) {
			return MasterAssignment.findById(masterScore.masterId);
		}) );
		return Promise.all( [foundShit, mastersWithScore] );
	}).then(function(foundMasters) {
		const tagScores = foundMasters[0].reduce(function(prev, curr) {
			curr.tags.forEach(function(tag) {
				prev.push({
					tag: tag,
					score: foundMasters[1].filter(function(score) {
						return ""+score.masterId == ""+curr._id;
					})[0].score
				});
			});
			return prev;
		}, []);
		res.send(tagScores);
	}).catch(console.error.bind(console));
});

//read one
router.get('/:assignmentId', function(req, res, next){
    Assignment.findOne({ _id: req.params.assignmentId } ).exec()
    .then(function(result){
        res.send(result);
    });
});

router.put('/:assignmentId', function(req, res, next){
    Assignment.update({ _id: req.params.assignmentId}, req.body, {upsert: true}, function(err) {
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
