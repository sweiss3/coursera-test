(function () {
    'use strict';

    angular.module('admin', ['ui.router', 'common'])
        .constant('RestaurantServiceUrl', 'https://sweiss3-restaurant-server.herokuapp.com');
})();