var express = require('express');
var router = express.Router();
var secretPin = process.env.SECRET_PIN;
const mongoClient = require('../mongoClient');

/* GET records */
router.get('/records', function(req, res) {
	var records = [];
	mongoClient.db().collection('records').find().toArray(function(err, items) {
        if (err) {
            console.log(err);
            res.json(err);s
        }
        res.json(items);
    });
});

/* VALIDATE PIN */

router.post('/validatepin', function(req, res) {
    if (req.body.data == secretPin) {
        res.send({msg:true});
    }
    else{
        res.send({msg:false});
    }
});


/* POST to addrecord */
router.post('/addrecord', function(req, res) {
	mongoClient.db().collection('records').insert(req.body, function(err, result){
		res.send(
			(err === null) ? { msg: '' } : { msg: err }
			);
	});
});

/* DELETE a record*/
router.delete('/deleterecord/:id',function(req, res) {
	var recordToDelete = req.params.id;
	mongoClient.db().collection('records').removeById(recordToDelete, function(err, result) {
		res.send((result === 1) ? { msg: ''} : { msg:'error: ' + err });
	});
});

/* GET cars */
router.get('/cars', function(req, res) {
	try {
		mongoClient.db().collection('carcollection').find().toArray(function (err, items) {
			if (err) {
				console.log(err);
			}
			res.json(items);
		});
	}catch(err){
		console.log(err);
	}
});

/* POST to addcar */
router.post('/addcar', function(req, res) {
	mongoClient.db().collection('carcollection').insert(req.body, function(err, result){
		res.send(
			(err === null) ? { msg: '' } : { msg: err }
			);
	});
});

/* DELETE a car*/
router.delete('/deletecar/:id',function(req, res) {
	var recordToDelete = req.params.id;
	mongoClient.db().collection('carcollection').removeById(recordToDelete, function(err, result) {
		res.send((result === 1) ? { msg: ''} : { msg:'error: ' + err });
	});
});

module.exports = router;
