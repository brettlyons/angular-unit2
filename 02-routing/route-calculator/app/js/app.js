var app = angular.module('calcApp', ['ngRoute']);


app.config(function($routeProvider) {
  $routeProvider
    .when('/:operator/:number1/:number2', {
      templateUrl: 'result.html',
      controller: 'ResultController',
    })
    .otherwise('/');
});
