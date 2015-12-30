var express = require('express'),
router = express.Router(),
db = require('../models');

/* GET users listing. */
router.get('/store', function(req, res, next) {
	db.store.findAll().then(function(store){
		res.render('store', {
			title: 'Express',
			store: store
		});
	});
});

module.exports = router;