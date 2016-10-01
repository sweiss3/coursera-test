(function () {
'use strict';


angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.lunchList = "";
    $scope.resultColor = "";
    $scope.resultBorderWidth = 0;

    $scope.checkLunch = function () {
        var splitLunch = $scope.lunchList.split(",").filter(function (val) {
            return val.trim().length > 0;
        });

        $scope.resultBorderWidth = 1;
        if (splitLunch.length === 0) {
            $scope.lunchResult = "Please enter data first";
            $scope.resultColor = "red";
        } else {
            $scope.resultColor = "green";
            if (splitLunch.length > 3) {
                $scope.lunchResult = "Too much!";
            } else {
                $scope.lunchResult = "Enjoy!";
            }
        }
    }

    $scope.getTextboxStyle = function() {
        if ($scope.resultColor.length > 0) {
            return "border-color: " + $scope.resultColor + ";";
        }

        return "";
    }
}

})();