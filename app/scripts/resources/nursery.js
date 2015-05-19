'use strict';

var app = angular.module('MainApp');

app.factory('Nursery', function() {
  return {};//$resource("http://naterator-dreamfactory.herokuapp.com:80/rest/db/nurseries");
});
