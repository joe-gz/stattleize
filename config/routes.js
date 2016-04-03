var express = require('express');
var router = express.Router();

var statsController = require('../controllers/statsController');

// Workouts:
router.get('/search', statsController.statsSearch)

module.exports = router;
