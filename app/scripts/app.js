'use strict';

/**
 * @ngdoc overview
 * @name elnateratorgithubioApp
 * @description
 * # elnateratorgithubioApp
 *
 * Main module of the application.
 */
angular
  .module('nateratorApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngLodash'
  ])
  .config(function($routeProvider) {
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
