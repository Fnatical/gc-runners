'use strict';

angular.module('gc-runners', ['ngRoute'])
.config(function($routeProvider){
    $routeProvider
    .when('/contact', {
        templateUrl : 'contact.html',
        controller  : 'ContactCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
});