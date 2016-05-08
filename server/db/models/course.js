'use strict';
var crypto = require('crypto');
var mongoose = require('mongoose');
var _ = require('lodash');

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    groups: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group'
    }],
    masterAssignments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MasterAssignment'
    }]
});

mongoose.model('Course', schema);
