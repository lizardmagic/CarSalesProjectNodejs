var express = require('express'),
router = express.Router(),
db = require('../models');

/* GET users listing. */
router.get('/customers', function(req, res, next) {
	db.customers.findAll().then(function(customers){
		res.render('customers', {
			title: 'Express',
			customers: customers
		});
	});
});

module.exports = router;
