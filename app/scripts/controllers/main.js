'use strict';

/**
 * @ngdoc function
 * @name elnateratorgithubioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the elnateratorgithubioApp
 */
var app = angular.module('nateratorApp');

app.controller('MainCtrl', function($scope, Nursery) {

  $scope.nurseries = Nursery.query();

});
