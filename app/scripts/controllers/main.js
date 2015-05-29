'use strict';

/**
 * @ngdoc function
 * @name angularProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularProjectApp
 */
var app = angular.module('angularProjectApp');
  app.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });


app.controller('articleController', function(){
  this.articles = articles;
});



var articles = {
  article1: {
    title: "test tytuł",
    body: "Jak sobie pościlisz tak się wyśpisz",
    author: "test@testowy.com"
  },
  article2: {
    title: "Maciek test",
    body: "Chodź tu malutka, zrobimy krasnoludka",
    author: "maciek@testowy.com"
  }
};
