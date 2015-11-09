app.controller('ResultController', function($scope, $routeParams) {
  ($routeParams.operator == 'add') ? $scope.result = Number($routeParams.number1) + Number($routeParams.number2) :
  ($routeParams.operator == 'divide') ? $scope.result = Number($routeParams.number1) / Number($routeParams.number2) :
  ($routeParams.operator == 'multiply') ? $scope.result = Number($routeParams.number1) * Number($routeParams.number2) :
  ($routeParams.operator == 'subtract') ? $scope.result = Number($routeParams.number1) - Number($routeParams.number2) : NaN;
});
