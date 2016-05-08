'use strict';
var crypto = require('crypto');
var mongoose = require('mongoose');
var _ = require('lodash');

var schema = new mongoose.Schema({
    name: String,
    phoneNumber: String
});

mongoose.model('Student', schema);
