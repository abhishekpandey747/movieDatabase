(function() {
  'use strict';

  var app = angular.module('app', ['ui.router', 'ngResource']);
  app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: './app/views/home.html',
        controller: 'search'
      })
      .state('movDetails', {
        url: '/movies/:id',
        templateUrl: './app/views/movieDetails.html',
        controller: 'movie'
      });
  });
})();