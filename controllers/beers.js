var Model = require('../models/beer');

var _beer = {
	create: function(req, res, call) {
		var dados = req.body,
			msg,
			model = new Model(dados);

		model.save(function(err, data) {
			call(err, data, res);
		}); 		
 	},
 	show: function(req, res, call) {
		var query = {_id: req.params.id};

		Model.findOne(query, function(err, data) {
			call(err, data, res);
		}); 		
 	}, 	 	
 	retrieve: function(req, res, call) {
		Model.find({}, function(err, data) {
			call(err, data, res);
		}); 		
 	},
 	update: function(req, res, call) {
		var query = {_id: req.params.id};
		var mod = req.body;
		var optional = {
			upsert: false,
			multi: true
		};

		delete mod._id;

		Model.update(query, mod, function(err, data) {
			call(err, data, res);
		});
 	},
 	delete: function(req, res, call) {
		var query = {_id: req.params.id};

		Model.remove(query, function(err, data) {
			call(err, data, res);
		}); 		
 	}
 };

 module.exports = _beer;