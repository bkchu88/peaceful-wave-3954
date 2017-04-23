var express = require('express');
var router = express.Router();

/* GET records */
router.get('/records', function(req, res) {
	var records = [];
	db.collection('records').find().toArray(function(err, items) {
        if (err) {
            console.log(err);
            res.json(err);s
        }
        res.json(items);
    });
});


/* POST to addrecord */
router.post('/addrecord', function(req, res) {
	db.collection('records').insert(req.body, function(err, result){
		res.send(
			(err === null) ? { msg: '' } : { msg: err }
			);
	});
});

/* DELETE a record*/
router.delete('/deleterecord/:id',function(req, res) {
	var recordToDelete = req.params.id;
	db.collection('records').removeById(recordToDelete, function(err, result) {
		res.send((result === 1) ? { msg: ''} : { msg:'error: ' + err });
	});
});

/* GET cars */
router.get('/cars', function(req, res) {
	db.collection('carcollection').find().toArray(function (err, items) {
		if(err) {
			console.log(err);
		}
		res.json(items);
	});
});

/* POST to addcar */
router.post('/addcar', function(req, res) {
	db.collection('carcollection').insert(req.body, function(err, result){
		res.send(
			(err === null) ? { msg: '' } : { msg: err }
			);
	});
});

/* DELETE a car*/
router.delete('/deletecar/:id',function(req, res) {
	var recordToDelete = req.params.id;
	db.collection('carcollection').removeById(recordToDelete, function(err, result) {
		res.send((result === 1) ? { msg: ''} : { msg:'error: ' + err });
	});
});

module.exports = router;
