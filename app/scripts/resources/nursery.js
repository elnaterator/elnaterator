'use strict';

var app = angular.module('MainApp');

app.factory('Nursery', function(DreamFactory) {
  return DreamFactory.api
});
