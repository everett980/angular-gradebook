'use strict';
var crypto = require('crypto');
var mongoose = require('mongoose');
var _ = require('lodash');

var schema = new mongoose.Schema({
    masterAssignment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MasterAssignment"
    },
    date: {
        type: Date
    },
    studentScores: [{
        studentRef: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student"
        },
        score: {
            type: Number
        }
    }]
});

mongoose.model('Assignment', schema);
