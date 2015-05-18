'use strict';

/**
 * @ngdoc function
 * @name elnateratorgithubioApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the elnateratorgithubioApp
 */
angular.module('MainApp')
  .controller('NurseryCtrl', function ($scope, $routeParams, lodash) {
    var _ = lodash;
    var id = $routeParams.id;

    $scope.nursery = Nursery.get({"id":id});
    console.log($scope.nursery);

  });
