 (function(angular) {

 'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).value('version', '0.1')
  .service('BeerService', BeerService)
  .service('BrewerieService', BrewerieService);  

  function BeerService($http) {
    var method = 'GET',
		baseUrl = '/api/beers';

	this.find = function() {
		return $http({			
			url: baseUrl,
			method: method
		});
	};	

	this.show = function(id) {
		var url = baseUrl + '/' + id;

		return $http({
			url: url,
			method: 'GET'			
		});
	};

	this.create = function(beer) {
	};

	this.save = function(id, beer) {
		var url = baseUrl + '/' + id,
			method = 'PUT';

		return $http({
			method: method,
			url: url,
			data: beer
		});		  
	};

	this.delete = function(id) {
		var url = baseUrl + '/' + id,
			method = 'DELETE';

		return $http({
			method: method,
			url: url			
		});		  		
	};
  };


  function BrewerieService($http) {
    var method = 'GET',
		baseUrl = '/api/breweries';

	this.find = function() {
		return $http({			
			url: baseUrl,
			method: method
		});
	};	
	
	this.show = function(id) {
		var url = baseUrl + '/' + id;

		return $http({
			url: url,
			method: 'GET'			
		});
	};

	this.create = function(brewerie) {
	};

	this.save = function(id, brewerie) {
		var url = baseUrl + '/' + id,
			method = 'PUT';

		return $http({
			method: method,
			url: url,
			data: beer
		});		  
	};

	this.delete = function(id) {
		var url = baseUrl + '/' + id,
			method = 'DELETE';

		return $http({
			method: method,
			url: url			
		});		  		
	};
  };  
  
  BeerService.$inject = ['$http'];
  BrewerieService.$inject = ['$http'];

 })(angular);
 