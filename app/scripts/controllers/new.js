'use strict';

/**
 * @ngdoc function
 * @name angularProjectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularProjectApp
 */
angular.module('angularProjectApp')
  .controller('NewCtrl', function ($scope, articleService) {


    $scope.addArticle = function(article) {
      articleService.addArticle(article);
    };

  });
