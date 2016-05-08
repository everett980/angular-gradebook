'use strict';
var crypto = require('crypto');
var mongoose = require('mongoose');
var _ = require('lodash');

var schema = new mongoose.Schema({
	uid: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
    name: {
        type: String,
        required: true
    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

mongoose.model('Teacher', schema);
