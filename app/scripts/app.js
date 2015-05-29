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

  app.service('articleService', function(){
    var articles = articlesTest;

    var addArticle = function(article) {
      articles.push(article);
    };

    var getArticles = function(){
      return articles;
    };

    return {
      addArticle: addArticle,
      getArticles: getArticles
    }
  });


var articlesTest = [
  {
    title: "test tytuł",
    body: "Jak sobie pościlisz tak się wyśpisz",
    author: "test@testowy.com"
  },
  {
    title: "Maciek test",
    body: "Chodź tu i zostań już na zawsze",
    author: "maciek@testowy.com"
  }
];


