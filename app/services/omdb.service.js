(function () {
  'use strict';

  var app = angular.module('app');

  app.factory('OMDB', function ($resource) {
    console.log('OMDB');
    return $resource('http://www.omdbapi.com/', {}, {
      query: {
        method: 'GET',
        isArray: false
      }
    });
  });
})();