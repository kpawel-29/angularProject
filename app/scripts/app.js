'use strict';

/**
 * @ngdoc overview
 * @name angularProjectApp
 * @description
 * # angularProjectApp
 *
 * Main module of the application.
 */

var app = angular.module('angularProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ]);

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/new', {
        templateUrl: '../views/new.html',
        controller: 'NewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


