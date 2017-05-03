(function() {
  'use strict';
  angular.module('myApp.numbers', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/numbers', {
      templateUrl: 'numbers/numbers.html',
      controller: 'numbersCtrl'
    });
  }])
  .controller('numbersCtrl', ["$scope",function($scope) {
    $scope.randomNumber=12345678;
    initialize();
    $scope.generateRandomNumber=generateRandomNumber;
    $scope.tryNextNumberClicked=tryNextNumberClicked;
    
    

    function generateRandomNumber(){
        $scope.randomNumber=Math.floor((Math.random() * 100000) + 100000);
    };
    function tryNextNumberClicked(form){
      form.$submitted=false;
      generateRandomNumber();
      $scope.input='';
    };
    function initialize(){
      generateRandomNumber();
      $scope.input='';
    }
  }]);
})();