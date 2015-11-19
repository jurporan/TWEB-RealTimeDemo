var tweb = angular.module('animals', ["chart.js"]);

tweb.controller("barChart", function($scope)
{
    $scope.labels = ["Cats", "Dogs", "Horses", "Other"];
    $scope.data	= [867, 257, 145, 187];
});
