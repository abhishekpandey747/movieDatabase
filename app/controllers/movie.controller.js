(function () {
  'use strict';

  var app = angular.module('app');

  app.controller('movie', function($scope, $stateParams, OMDB) {
    $scope.movie = {};
    $scope.comments = [
    {
      comment : 'This one is great movie',
      rating : 5
    }];
    $scope.loading = true;

    searchMovies();
    
    function searchMovies() {
      $scope.loading = true;
      OMDB.get({
        i: $stateParams.id,
        plot: 'short',
        r: 'json',
        tomatoes : 'false'
      }, function (resp) {
        $scope.movie = resp;
        $scope.loading = false;
      }, function (err) {
        $scope.loading = false;
        console.log('err', err);
      });
    };
    //This Block of Code is for the comment 
    $scope.searchingEnter = function (event) {
    $scope.addComment();
    };
    $scope.addComment = function(){
      $scope.comments.push({
        comment : $scope.comment,
        rating : $scope.rating
      })
      console.log($scope.comments)
      $scope.comment = '';
    };
  });
})();