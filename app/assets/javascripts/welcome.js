// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
console.log('loaded!');

window.onload = function(){
  console.log('ready');
};


var app = angular.module('kindOrandom', []);

app.controller('KindnessController', ['$scope', '$http', function($scope, $http){

  $http.get('api/kindness').then(function(response){
    var data = response.data;
    $scope.kindness = data.kindness;
  });

  $scope.newKindness = {};

  $scope.createKindness = function(){
    $http.post('/api/kindness', {kindness: $scope.newKindness}).then(function(response){
      var data = response.data;
      $scope.kindness.push(data);
    });
  };

}]);
