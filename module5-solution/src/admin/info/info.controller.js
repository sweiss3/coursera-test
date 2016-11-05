(function () {
    'use strict';

    angular.module('admin').controller('InfoController', InfoController);

    InfoController.$inject = ['SignupService'];    
    function InfoController(SignupService) {
        var infoCtrl = this;

        infoCtrl.isSignedUp = function () {
            infoCtrl.user = SignupService.user;
            return !!infoCtrl.user;
        }
    }
})();