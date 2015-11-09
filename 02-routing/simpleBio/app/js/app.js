var app = angular.module('bio', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/resume', {
      templateUrl: 'resume.html',
      controller: 'ResumeController'
    })
    .when('/projects', {
      templateUrl: 'projects.html',
      controller: 'ProjectsController'
    })
    .when('/bio', {
      templateUrl: 'bio.html',
      controller: 'BioController'
    })
    .otherwise({
      templateUrl: 'home.html',
      controller: 'HomeController'
    });
});
