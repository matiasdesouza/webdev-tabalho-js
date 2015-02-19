var express = require('express');
var router = express.Router();
var Controller = require('./../../controllers/beers');

var call = function(err, data, res) {
	if(err) {
		msg = '{ Erro: ' + err + '}';		
	} else {
		msg = data;
	}	
	console.log(msg);
	res.json(msg);
}

router.get('/', function(req, res) {
	Controller.retrieve(req, res, call);
});

router.get('/:id', function(req, res) {
	Controller.show(req, res, call);
});

router.post('/', function(req, res) {
	Controller.create(req, res, call);
});

router.put('/:id', function(req, res) {
	Controller.update(req, res, call);
});

router.delete('/:id', function(req, res) {
	Controller.delete(req, res, call);
});

module.exports = router;