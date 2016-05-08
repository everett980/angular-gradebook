'use strict';
var crypto = require('crypto');
var mongoose = require('mongoose');
var _ = require('lodash');

var schema = new mongoose.Schema({
    groupName: {
        type: String,
        required: true
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }],
    assignments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MasterAssignment'
    }]
});

mongoose.model('Group', schema);
