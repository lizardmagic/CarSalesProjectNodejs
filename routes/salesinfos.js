var express = require('express'),
router = express.Router(),
db = require('../models');

/* GET users listing. */
router.get('/salesinfos', function(req, res, next) {
	db.salesinfos.findAll().then(function(salesinfos){
		res.render('salesinfos', {
			title: 'Express',
			salesinfos: salesinfos
		});
	});
});

module.exports = router;