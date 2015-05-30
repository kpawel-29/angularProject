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
    $scope.editArticle = function(index){
      articleService.editArticle(index);
    };
  });

app.directive('articleTemplate', function() {
  return {
    restrict: 'E',
    templateUrl: '../../views/articleTemplate.html'
  }
});

  app.controller('buttonController', function($scope){
    $scope.buttonValue = {message: 'Rozwiń'};
    $scope.editArtDetails = function(article) {
      if (!article.details) {
        $scope.articles[article.index].details = true;
        $scope.buttonValue.message = 'Zwiń';
      }else{
        $scope.articles[article.index].details = false;
        $scope.buttonValue.message = 'Rozwiń';
      }
    };
  });

