var ctrl = angular.module('MainControllers', []);

ctrl.controller('KindnessController', ['$scope', '$timeout', 'KindnessApi', function($scope, $timeout, KindnessApi){

  $scope.kindness = [];

  $scope.getKindness = function(){
    KindnessApi.getKindness().then(function(response){
      var data = response.data;
      $scope.kindness = data.kindness;
    })
  }

  // $scope.kindnessAdded = function(){
  //   $scope.added = true;
  //   $timeout(function(){
  //     $scope.newKindness = {};
  //     $scope.added = false;
  //   }, 3000);
  // }

  $scope.createKindness = function(){
    KindnessApi.createKindness($scope.newKindness).then(function(){
      $scope.getKindness();
      console.log($scope.newKindness);
      $scope.kindness.push($scope.newKindness);
      // $scope.kindnessAdded();
    });
  }

  $scope.getKindness();
}]);
