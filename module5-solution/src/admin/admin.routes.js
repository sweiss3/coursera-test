(function () {
    'use strict';

    angular.module('admin').config(adminConfig);

    adminConfig.$inject = ['$stateProvider'];    
    function adminConfig($stateProvider) {
        $stateProvider.state('admin', {
            url: '/admin',
            templateUrl: 'src/admin/admin.html',
            abstract: true
        }).state('admin.signup', {
            url: '/signup',
            templateUrl: 'src/admin/signup/signup.html',
            controller: 'SignupController',
            controllerAs: 'signupCtrl'
        }).state('admin.info', {
            url: '/info',
            templateUrl: 'src/admin/info/info.html',
            controller: 'InfoController',
            controllerAs: 'infoCtrl'
        });
    }
})();