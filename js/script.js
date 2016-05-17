var app = angular.module("computer", ['ngRoute'])

//Configuring the routes

.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/main', {
            templateUrl: '../pages/main.html',
            controller: 'MainCtrl'
    })
        .when('/about', {
                templateUrl: '../pages/about.html',
                controller: 'MainCtrl'
        })
        .when('/services', {
                templateUrl: '../pages/services.html',
                controller: 'ServicesCtrl'
        })
        .when('/contact', {
                templateUrl: '../pages/contact.html',
                controller: 'ContactCtrl'
        })
        .otherwise({redirectTo: '/main'});
}])

.controller('MainCtrl', ['$scope', function($scope){

}])

.controller('ServicesCtrl', ['$scope', function($scope){
    
}])

.controller('ContactCtrl', ['$scope', function($scope){

}])