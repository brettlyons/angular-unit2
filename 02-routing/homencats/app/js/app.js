var app = angular.module('catApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'HomeController'
    })
    .when('/cats', {
      templateUrl: 'cats.html',
      controller: 'CatsController'
    })
    .otherwise({
      templateUrl: 'home.html',
      controller: 'HomeController'
    });
});
