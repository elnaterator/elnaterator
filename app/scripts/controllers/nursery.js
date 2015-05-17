'use strict';

/**
 * @ngdoc function
 * @name elnateratorgithubioApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the elnateratorgithubioApp
 */
angular.module('nateratorApp')
  .controller('NurseryCtrl', function ($scope, $routeParams, lodash, Nursery) {
    var _ = lodash;
    var id = $routeParams.id;

    $scope.nursery = Nursery.get({"id":id});
    console.log($scope.nursery);

  });
