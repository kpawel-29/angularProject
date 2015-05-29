'use strict';

/**
 * @ngdoc function
 * @name angularProjectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularProjectApp
 */
angular.module('angularProjectApp')
  .controller('NewCtrl', function ($scope) {
    $scope.awesomeThings = {
      article3: {
                  title: "test tytuł",
                  body: "Jak sobie pościlisz tak się wyśpisz",
                  author: "test@testowy.com"
                }
      };
    $scope.addArticle = function(value) {
      $scope.awesomeThings.push(value);
    };
  });
