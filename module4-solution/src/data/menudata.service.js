(function () {
    'use strict';

    angular.module('data').service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {
        var service = this;

        service.getAllCategories = function () {
            var categoriesEndpoint = "https://davids-restaurant.herokuapp.com/categories.json";
            return $http({
                method: 'GET',
                url: categoriesEndpoint
            }).then(function success(response) {
                return response.data;
            });
        };

        service.getItemsForCategory = function (categoryShortName) {
            var itemsForCategoryEndpoint = "https://davids-restaurant.herokuapp.com/menu_items.json?category=";
            return $http({
                method: 'GET',
                url: itemsForCategoryEndpoint + encodeURIComponent(categoryShortName)
            }).then(function success(response) {
                return response.data.menu_items;
            });
        };
    }

})();