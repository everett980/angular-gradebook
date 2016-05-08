'use strict';
var crypto = require('crypto');
var mongoose = require('mongoose');
var _ = require('lodash');

var schema = new mongoose.Schema({
    name: String,
    type: String,
    tags: [String]
});

mongoose.model('MasterAssignment', schema);
