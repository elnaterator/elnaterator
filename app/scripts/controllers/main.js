'use strict';

/**
 * @ngdoc function
 * @name elnateratorgithubioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the elnateratorgithubioApp
 */
var app = angular.module('MainApp');

app.controller('MainCtrl', function($scope, DreamFactory) {

  $scope.getNurseries = function() {
    console.log(DreamFactory.api.db);
    DreamFactory.api.db.getRecords({table_name:"nurseries"},
      function(result) {
        $scope.nurseries = result.record;
        console.log(result);
      }
    );

  }

});
