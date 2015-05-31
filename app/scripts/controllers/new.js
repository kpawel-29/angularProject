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

    $scope.added = false;
    $scope.addArticle = function(article) {
      var size = articleService.getArticles().length;
      article.index = size;
      article.details = false;
      articleService.addArticle(article);
      $scope.added = true;
    };


  });
