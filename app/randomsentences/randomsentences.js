(function() {
  'use strict';
  angular.module('myApp.randomsentences', [
      'ngRoute',
      'myApp.toUpper-directive'
      ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/randomsentences', {
      templateUrl: 'randomsentences/randomsentences.html',
      controller: 'randomsentencesCtrl'
    });
  }])
  .controller('randomsentencesCtrl', ["$scope","$http",function($scope,$http) {
        $scope.sentence="this is a sentence";
        initialize();
        $scope.getRandomSentence=getRandomSentence;
        $scope.tryNextSentenceClicked=tryNextSentenceClicked;
        $scope.areSame=areSame;

        function getRandomSentence(){
        
            $http.get('/data/words.json', {})
            .then(successCallback, errorCallback);
            function successCallback(response){
              let wordCount=Math.floor(getRandomArbitrary(3,3));//3,6
              let sentence="";
              for(var i=1;i<=wordCount;i++)
              {
                let index=Math.floor(getRandomArbitrary(0,response.data.length-1));
                sentence=sentence+response.data[index];
                if(i<wordCount){
                   sentence=sentence+" ";
                }
              };
              $scope.sentence=sentence.toUpperCase();
            }
            function errorCallback(){

            }
        };
        function tryNextSentenceClicked(form){
          form.$submitted=false;
          getRandomSentence();
          $scope.input="";
        };
        function initialize(){
          getRandomSentence();
          $scope.input="";
        }
        function getRandomArbitrary(min, max) {
          return Math.random() * (max - min) + min;
        }
        function areSame(){
          return $scope.input==$scope.sentence;
        }
  }]);
})();