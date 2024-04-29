let app = angular.module("swApp", []);
app.controller("swCtrlr", function($scope, $http){
    $http.get('sea.json').then(function(response){
        $scope.trips = response.data;
        console.log($scope.trips);
    })
})