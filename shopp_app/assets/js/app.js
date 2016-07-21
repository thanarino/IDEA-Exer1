(function(){
  var app = angular.module("takeShop", []);

  app.controller('allShopController', ['$scope', '$http', function($scope, $http){
    $http.get('http://acssuplb.github.io/json/exer1_inventory.json')
         .success(function(data){
            $scope.products = data;
         });
  }]);
})();
