'use strict';
var router = require('express').Router();
module.exports = router;

router.use('/members', require('./members'));

router.use('/teachers', require('./teachers'));
router.use('/groups', require('./groups'));
router.use('/courses', require('./courses'));
router.use('/students', require('./students'));
router.use('/assignments', require('./assignments'));
router.use('/masterAssignments', require('./masterAssignments'));

// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
    res.status(404).end();
});
