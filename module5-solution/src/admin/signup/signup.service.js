(function () {
    'use strict';

    angular.module('admin').service('SignupService', SignupService);

    SignupService.$inject = ['$http', 'RestaurantServiceUrl'];    
    function SignupService($http, RestaurantServiceUrl) {
        var service = this;

        service.checkDish = function (dishShortName) {
            return $http.get(RestaurantServiceUrl + '/menu_items/' + dishShortName + '.json').then(function success(response) { 
                return response.data;
            });
        };
    }
})();