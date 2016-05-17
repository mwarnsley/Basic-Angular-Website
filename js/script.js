var app = angular.module("computer", ['ngRoute'])

//Configuring the routes

.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/main', {
            templateUrl: '../pages/main.html',
            controller: 'MainCtrl'
    })
        .otherwise({redirectTo: '/main'});
}])

.controller('MainCtrl', ['$scope', function($scope){
    console.log($scope);
}]);