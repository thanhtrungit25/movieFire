var app = angular.module('MovieFire', ["firebase"]);
// console.log(app);

app.controller("MainController", function($scope, $firebaseObject) {
    $scope.favMovies = new Firebase('https://blinding-heat-3067.firebaseio.com/');

    $scope.movies = [];

    $scope.saveToList = function(event) {

        if (event.which == 13 || event.keyCode == 13) {
            // get movie favourite
            var mvName = $scope.mvName.trim();
            console.log(mvName);
            if (mvName.length > 0) {
                // $scope.favMovies.$add({
                //     name:  mvName
                // })
            }
        }
    } // end of saveToList function


});