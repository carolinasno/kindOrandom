var ctrl = angular.module('MainControllers', []);

ctrl.controller('KindnessController', ['$scope', '$timeout', 'KindnessApi', function($scope, $timeout, KindnessApi){

  $scope.kindness = [];

  $scope.newKindness = {
    name: null,
    date: null,
    kindness: null,
    location: null,
    lat: 0,
    lng: 0
  };

  $scope.getKindness = function(){
    KindnessApi.getKindness().then(function(response){
      var data = response.data;
      $scope.kindness = data.kindness;
    })
  }

  $scope.kindnessAdded = function(){
    $scope.added = true;
    $timeout(function(){
      $scope.newKindness = {};
      $scope.added = false;
    }, 3000);
  }

  $scope.createKindness = function(){
    KindnessApi.createKindness($scope.newKindness).then(function(){
      $scope.getKindness();
      $scope.kindness.push(data);
      $scope.kindnessAdded();
    });
  }

  $scope.getKindness();
}]);
