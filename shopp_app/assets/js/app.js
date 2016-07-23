(function(){
  var app = angular.module("takeShop", ["ngRoute"]);

  app.config(['$routeProvider', function($routeProvider){
    $routeProvider
      .when('/mainPage', {
        templateUrl: 'pages/shop.html',
        controller: 'allShopController'
      })
      .when('/myCart', {
        templateURL: 'pages/cart.html',
        controller: 'myCartController'
      })
      .otherwise({
        redirectTo: '/mainPage'
      });
  }]);

  app.controller('allShopController', ['$scope', '$http', function($scope, $http){
    $http.get('http://acssuplb.github.io/json/exer1_inventory.json')
         .success(function(data){
            $scope.products = data;
         });
  }]);

  app.controller('myCartController', ['$scope', '$http', function($scope, $http){
    $http.get('../assets/json/cart.json')
      .success(function(data){
        $scope.items = data;
      });
  }]);
})();
