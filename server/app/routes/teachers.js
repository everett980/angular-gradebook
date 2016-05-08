'use strict';
var router = require('express').Router();
var mongoose = require('mongoose');
require("../../db/models/teacher");
var Teacher = mongoose.model('Teacher');

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

//get by uid
router.get('/uid/:teacherUID/', (req, res, next) => {
	Teacher.findOne({uid: req.params.teacherUID}).exec()
	.then((result) => {
		res.send(result);
	});
});

//get all students for a particular teacher by uid
router.get('/allstudents/:teacherUID/', (req, res, next) => {
	Teacher.findOne({uid: req.params.teacherUID}).exec()
	.then((foundTeacher) => {
		var Course = mongoose.model('Course');
		return Course.find({'_id': { $in: foundTeacher.courses }});
	}).then((foundCourses) => {
		const groupIds = foundCourses.reduce(function(prev, curr) {
			curr.groups.forEach(function(groupId) {
				prev.push(groupId);
			});
			return prev;
		}, []);
		var Group = mongoose.model('Group');
		return Group.find({'_id': { $in: groupIds }});
	}).then((groups) => {
		const studentIds = groups.reduce(function(prev, curr) {
			curr.students.forEach(function(studentId) {
				prev.push(studentId);
			});
			return prev;
		}, []);
		var Student = mongoose.model('Student');
		return Student.find({'_id': { $in: studentIds }});
	}).then((students) => {
		res.send(students);
	}).catch((err) => {
		console.error(err);
		res.send(err);
	})
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
