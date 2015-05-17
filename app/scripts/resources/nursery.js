'use strict';

var app = angular.module('nateratorApp');

app.factory('Nursery', function($resource) {
  return $resource('http://localhost:9000/static/nurseries/:id.json');
});
