(function(angular) {

'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('AppCtrl', function ($scope, $http) {

        $http({
            method: 'GET',
            url: '/api/name'
        }).
        success(function (data, status, headers, config) {
            $scope.name = data.name;
        }).
        error(function (data, status, headers, config) {
            $scope.name = 'Error!';
        });
    })
    .controller("BeerListController", ["$scope", "$http", "BeerService", 
        function BeerListController($scope, $http, BeerService) {
            var method = 'GET',
                url = '/api/beers';        
            
            BeerService
                .find()
                .success(function(data) {
                    console.log('Sucesso: ', data);
                    $scope.beers = data;
                })
                .error(function() {
                    console.log('Erro na listagem');
                });

            $scope.deletar = function(beer) {
                if(confirm('Deseja mesmo deletar a cerveja ' + beer.name + '?')) {
                    var id = beer._id,
                        url = '/api/beers/' + id,
                        method = 'DELETE';                

                    $http({
                        url: url,        
                        method: method                    
                    })
                    .success(function(data) {
                        var index = $scope.beers.indexOf(beer);
                        $scope.beers.splice(index, 1);
                    })
                    .error(function(err) {
                        console.log(err);
                    })
                } else {
                        alert('UFA! Que bom!!!');
                }
            };
        }
    ])
    .controller('BeerShowController', ["$scope", "$http", "$routeParams", "BeerService", 
        function($scope, $http, $routeParams, BeerService) {
            var id = $routeParams.id;

            BeerService.show(id)
                .success(function(data) {
                    console.log('Sucesso: ', data);
                    $scope.beer = data;
                })
                .error(function(err) {
                    console.log('Erro: ', err);
                })
        }
    ])    
    .controller('BeerCreateController', function($scope, $http) {
        var method = 'POST',
            url = '/api/beers/';

        $scope.msg = '';

        $scope.create = function(beer) {
            $http({
                url: url,
                method: method,                
                data: beer
            })
            .success(function(data) {
                console.log(data);
                $scope.msg = 'Cerveja cadastrada com sucesso';
            })
            .error(function(err) {
                console.log(err);
            })
        }
    })  
    .controller('BeerEditController', function($scope, $http, $routeParams) {
        var method = 'GET',
            id = $routeParams.id,
            url = '/api/beers/' + id;

        $http({
            url: url,
            method: method        
        })
        .success(function(data) {
            console.log('Sucesso: ', data);
            $scope.beer = data;
        })
        .error(function(err) {
            console.log('Erro: ', err);
        })

        $scope.save = function(beer) {
            method = 'PUT';

            $http({
                url: url,
                method: method,                
                data: beer
            })
            .success(function(data) {
                console.log(data);
                $scope.msg = 'Cerveja alterada com sucesso';
            })
            .error(function(err) {
                console.log(err);
            })
        }    
    })
    .controller("BrewerieListController", ["$scope", "$http", "BrewerieService", 
        function BeerListController($scope, $http, BrewerieService) {
            var method = 'GET',
                url = '/api/breweries';        
            
            BrewerieService
                .find()
                .success(function(data) {
                    console.log('Sucesso: ', data);
                    $scope.breweries = data;
                })
                .error(function() {
                    console.log('Erro na listagem');
                });

            $scope.deletar = function(brewerie) {
                if(confirm('Deseja mesmo deletar a cervejaria ' + brewerie.name + '?')) {
                    var id = brewerie._id,
                        url = '/api/breweries/' + id,
                        method = 'DELETE';                

                    $http({
                        url: url,        
                        method: method                    
                    })
                    .success(function(data) {
                        var index = $scope.breweries.indexOf(brewerie);
                        $scope.breweries.splice(index, 1);
                    })
                    .error(function(err) {
                        console.log(err);
                    })
                } else {
                        alert('Que bom que mudou de ideia!!!');
                }
            };
        }
    ])
    .controller('BrewerieShowController', ["$scope", "$http", "$routeParams", "BrewerieService", 
        function($scope, $http, $routeParams, BrewerieService) {
            var id = $routeParams.id;

            BrewerieService.show(id)
                .success(function(data) {
                    console.log('Sucesso: ', data);
                    $scope.brewerie = data;
                })
                .error(function(err) {
                    console.log('Erro: ', err);
                })
        }
    ])
    .controller('BrewerieCreateController', function($scope, $http) {
        var method = 'POST',
            url = '/api/breweries/';

        $scope.msg = '';

        $scope.create = function(brewerie) {
            $http({
                url: url,
                method: method,                
                data: brewerie
            })
            .success(function(data) {
                console.log(data);
                $scope.msg = 'Cervejaria cadastrada com sucesso';
            })
            .error(function(err) {
                console.log(err);
            })
        }
    })
    .controller('BrewerieEditController', function($scope, $http, $routeParams) {
        var method = 'GET',
            id = $routeParams.id,
            url = '/api/breweries/' + id;

        $http({
            url: url,
            method: method        
        })
        .success(function(data) {
            console.log('Sucesso: ', data);
            $scope.brewerie = data;
        })
        .error(function(err) {
            console.log('Erro: ', err);
        })

        $scope.save = function(brewerie) {
            method = 'PUT';

            $http({
                url: url,
                method: method,                
                data: brewerie
            })
            .success(function(data) {
                console.log(data);
                $scope.msg = 'Cervejaria alterada com sucesso';
            })
            .error(function(err) {
                console.log(err);
            })
        }    
    });       

}(angular));
