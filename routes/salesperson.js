var express = require('express'),
router = express.Router(),
db = require('../models');

/* GET users listing. */
router.get('/salespeople', function(req, res, next) {
	db.salespeople.findAll().then(function(salespeople){
		res.render('salespeople', {
			title: 'Express',
			salesperson: salesperson
		});
	});
});

module.exports = router;
