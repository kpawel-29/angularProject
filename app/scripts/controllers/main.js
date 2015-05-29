'use strict';

/**
 * @ngdoc function
 * @name angularProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularProjectApp
 */
var app = angular.module('angularProjectApp');
  app.controller('MainCtrl', function ($scope, articleService){
    $scope.articles = articleService.getArticles();
  });




