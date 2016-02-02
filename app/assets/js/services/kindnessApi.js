var api = angular.module('ApiServices', []);

api.factory('KindnessApi', ['$http', function($http){

  var baseUrl = '/api/kindness/';

  var kindnessInterface = {};

  kindnessInterface.getKindness = function(){
    return $http.get(baseUrl);
  };

  kindnessInterface.createKindness = function(newKindness, callback){
    return $http.post(baseUrl, {kindness: newKindness});
  };

  return kindnessInterface;

}]);
