'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
   'myApp.controllers',
   'myApp.filters',
   'myApp.services',
   'myApp.directives'
]).
config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
   $routeProvider.
      when('/beers', { 
         templateUrl: 'expose/beers/list',
         controller: 'BeerListController'
      }).
      when('/beers/create', {
         templateUrl: 'expose/beers/create',
         controller: 'BeerCreateController'
      }).    
      when('/beers/:id', {
         templateUrl: 'expose/beers/show',
         controller: 'BeerShowController'
      }).            
      when('/beers/:id/edit', {
         templateUrl: 'expose/beers/edit',
         controller: 'BeerEditController'
      }).    
      when('/breweries', { 
         templateUrl: 'expose/breweries/list',
         controller: 'BrewerieListController'
      }).
      when('/breweries/create', { 
         templateUrl: 'expose/breweries/create',
         controller: 'BrewerieCreateController'
      }).     
      when('/breweries/:id', { 
         templateUrl: 'expose/breweries/show',
         controller: 'BrewerieShowController'
      }).
      when('/breweries/:id/edit', { 
         templateUrl: 'expose/breweries/edit',
         controller: 'BrewerieEditController'
      }).
      otherwise({
         redirectTo: '/'
      });

  $locationProvider.html5Mode(true);
}]);
