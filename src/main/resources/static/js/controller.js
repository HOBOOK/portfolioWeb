var app = angular.module('app',[]);
app.controller('controller', function($scope, $filter){
    $scope.clickfunction = function () {
        var time = $filter('date')(new Date(),'yyyy-MM-dd Z');
        $scope.welcome = "Time = " + time;

    }
});