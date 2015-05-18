'use strict';

/**
 * @ngdoc overview
 * @name elnateratorgithubioApp
 * @description
 * # elnateratorgithubioApp
 *
 * Main module of the application.
 */
var app = angular
  .module('MainApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngLodash',
    'ngDreamFactory'
  ]);

app
  .constant('DSP_URL', 'http://naterator-dreamfactory.herokuapp.com:80')
  .constant('DSP_API_KEY', 'testapp')

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/nursery/:id', {
      templateUrl: 'views/nursery.html',
      controller: 'NurseryCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
