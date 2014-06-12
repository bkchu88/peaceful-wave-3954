var express = require('express');
var router = express.Router();



/*

router.get('/records', function(req, res) {
	var db = req.db;
	db.collection('records').find().toArray(function (err, items) {
		res.json(items);
	});
});


router.post('/addrecord', function(req, res) {
	var db = req.db;
	db.collection('records').insert(req.body, function(err, result){
		res.send(
			(err === null) ? { msg: '' } : { msg: err }
			);
	});
});
*/
module.exports = router;
