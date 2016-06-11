var app = angular.module("sampleApp", ["firebase"]);

app.controller("SampleCtrl", function($scope, $firebaseArray) {
  var ref = new Firebase('https://blinding-heat-3067.firebaseio.com/');

  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  $scope.movies = $firebaseArray(ref);
  console.log($scope.movies);
});