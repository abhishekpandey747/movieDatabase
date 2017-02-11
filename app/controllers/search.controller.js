(function () {
  'use strict';

  var app = angular.module('app');

  app.controller('search', function($scope, OMDB, $state, $rootScope) {
    $scope.movies = [];
    $("#search").on('keyup', function (e) {
    if (e.keyCode == 13) {
      console.log($scope.searchQuery);
         var query = {
        s: $scope.searchQuery
      };
      searchMovies(query);
    }
});
    
    function searchMovies(query) {
      console.log("aaho");
      OMDB.query(query, function (resp) {
        $scope.movies = resp.Search;
        console.log($scope.movies);
        $scope.movies = $scope.movies;
      }, function (err) {
        console.log('err', err);
      });
    }
  });
})();