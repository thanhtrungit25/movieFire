var app = angular.module("sampleApp", ["firebase"]);

app.controller("SampleCtrl", function($scope, $firebaseArray) {
  var ref = new Firebase('https://blinding-heat-3067.firebaseio.com/');

  // create a syncronized array
  $scope.movies = $firebaseArray(ref);

  // add new items to the array
  // the movie is automatically added to our Firebase database!
  $scope.addMovie = function() {
    $scope.movies.$add({
        name: $scope.newMovieText
    });
  };

});