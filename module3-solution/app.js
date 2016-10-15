(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('menuItemsEndpoint', 'https://davids-restaurant.herokuapp.com/menu_items.json')
        .directive('foundItems', FoundItemsDirective);
    
    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'foundItems.html',
            restrict: 'E',
            scope: {
                foundItems: '<',
                onRemove: '&'
            },
            controller: FoundItemsDirectiveController,
            controllerAs: 'itemsController',
            bindToController: true
        };

        return ddo;
    }

    function FoundItemsDirectiveController() {
        var itemsController = this;

    }    

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var controller = this;
        controller.found = [];
        controller.searchTerm = "";

        controller.narrowItDown = function () {
            MenuSearchService.getMatchedMenuItems(controller.searchTerm).then(function success(foundItems) {
                controller.found = foundItems;
            });
        };

        controller.removeItem = function (itemIndex) {
            controller.found.splice(itemIndex, 1);
        };
    }

    MenuSearchService.$inject = ['$http', 'menuItemsEndpoint'];    
    function MenuSearchService($http, menuItemsEndpoint) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method: 'GET',
                url: menuItemsEndpoint
            }).then(function success(response) {
                var foundItems = response.data.menu_items.filter(function (item) {
                    return item.description.indexOf(searchTerm) !== -1;
                });

                return foundItems;
            }, function error(response) {
                
            });
        };
    }
})();