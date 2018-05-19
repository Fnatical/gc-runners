'use strict';

angular.module('gc-runners', ['ngRoute'])
.config(function($routeProvider){
    $routeProvider

    .when('/contact', {
        templateUrl : 'views/contact.html',
        controller  : 'ContactCtrl'
    })

    .when('/about', {
        templateUrl : 'views/about.html',
        controller  : 'AboutCtrl'
    })

    .otherwise({
        redirectTo: '/'
    });
});