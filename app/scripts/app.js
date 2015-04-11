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
  .module('elnateratorgithubioApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
