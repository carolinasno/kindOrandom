var ctrl = angular.module('MainControllers', []);

ctrl.controller('KindnessController', ['$scope', '$timeout', 'KindnessApi', 'NgMap', function($scope, $timeout, KindnessApi, NgMap){

  NgMap.getMap().then(function(map){
    $scope.map = map;
  });

  $scope.newKindness = {
      name: null,
      date: null,
      kindness: null,
      location: null
  } //refer to puppies lab

  $scope.kindnessTemplate = angular.copy($scope.newKindness);

  $scope.kindness = [];

  $scope.showKindnessInfo = function(e, kindness){
    console.log(e, kindness);
    $scope.currentKindness = kindness;
    $scope.map.showInfoWindow('kindness-window', kindness.id);
  }

  $scope.getKindness = function(){
    KindnessApi.getKindness().then(function(response){
      var data = response.data;
      console.log(data.kindness);
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
      $scope.kindness.push($scope.newKindness);
      $scope.getKindness();
      console.log($scope.newKindness);
      $scope.newKindness = angular.copy($scope.kindnessTemplate);
      // $scope.kindnessAdded();

    });
  }

  $scope.getKindness();

}]);
