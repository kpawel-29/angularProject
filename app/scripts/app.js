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

    var editArticle = function(article){
      if(articles[article.index].index){
        articles[article.index].details = false;
      } else {
        articles[article.index].details = true;
      }
      console.log(article.index);
    };

    return {
      addArticle: addArticle,
      getArticles: getArticles,
      editArticle: editArticle
    }
  });


var articlesTest = [
  {
    index: "0",
    details: false,
    title: "test tytuł",
    body: "Jak sobie pościlisz tak sisdfsf fsdfsdf sdfsdfz sfzsfs fzsfzs fzsf zsfszg zrgzrdr zzb hzb zbzrfs fzsfzs fzsf zsfszg zrgzrdr zzb hzb zbzrzę wyśpisz",
    author: "test@testowy.com"
  },
  {
    index: "1",
    details: false,
    title: "Maciek test",
    body: "Chodź tu i zostań już na zfs fzsfzs fzsf zsfszg zrgzrdr zzb hzb zbzrawsze",
    author: "maciek@testowy.com"
  }
];


