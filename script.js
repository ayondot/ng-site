var app = angular.module("computer", ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/main', {
      templateUrl: 'main.html',
      controller: 'MainCtrl'
    }).
    when('/about', {
    	templateUrl: 'about.html',
    	controller: 'MainCtrl'
    }).
    when('/contact', {
    	templateUrl: 'contact.html',
    	controller: 'ContactCtrl'
    }). 
    when('/services', {
    	templateUrl: 'services.html',
    	controller: 'ServicesCtrl'
    }).
    otherwise({
    	redirectTo: '/main'
    });
}]).
controller('MainCtrl', ['$scope', function($scope){
	console.log('This is the main controller');
}]).
controller('ContactCtrl', ['$scope', '$http', function($scope, $http){
    $http.get('locations.json').then(function(response){
        $scope.locations = response.data;
    });
}]).
controller('ServicesCtrl', ['$scope', '$http', function($scope, $http){
    $http.get('services.json').then(function(response){
        $scope.services = response.data;
    });
}]);

