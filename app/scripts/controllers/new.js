'use strict';

/**
 * @ngdoc function
 * @name angularProjectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularProjectApp
 */
angular.module('angularProjectApp')
  .controller('newCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
