var express = require('express'),
router = express.Router(),
db = require('../models');

/* GET users listing. */
router.get('/carinfos', function(req, res, next) {
	db.carinfos.findAll().then(function(carinfos){
		res.render('carinfos', {
			title: 'Express',
			carinfos: carinfos
		});
	});
});

module.exports = router;