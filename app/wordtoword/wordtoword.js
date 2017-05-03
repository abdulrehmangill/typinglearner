(function() {
  'use strict';
  angular.module('myApp.wordtoword', [
      'ngRoute',
      'myApp.toUpper-directive'
      ])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/wordtoword', {
      templateUrl: 'wordtoword/wordtoword.html',
      controller: 'wordtowordCtrl'
    });
  }])

  .controller('wordtowordCtrl', ["$scope","$http",function($scope,$http) {
    $scope.word="WORD";
        initialize();
        $scope.getRandomWord=getRandomWord;
        $scope.tryNextWordClicked=tryNextWordClicked;
        
        function getRandomWord(){
        
            $http.get('/data/words.json', {})
            .then(successCallback, errorCallback);
            function successCallback(response){
              let index=Math.floor(getRandomArbitrary(0,response.data.length-1));
              let word=response.data[index];
              $scope.word=word? word.toUpperCase() : "";
            }
            function errorCallback(){

            }
        };
        function tryNextWordClicked(form){
          form.$submitted=false;
          getRandomWord();
          $scope.input='';
        };
        function initialize(){
          getRandomWord();
          $scope.input="";
        }
        function getRandomArbitrary(min, max) {
          return Math.random() * (max - min) + min;
        }
  }]);
})();