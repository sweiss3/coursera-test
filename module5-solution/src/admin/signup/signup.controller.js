(function () {
    angular.module('admin').controller('SignupController', SignupController);

    SignupController.$inject = ['SignupService'];    
    function SignupController(SignupService) {
        var signupCtrl = this;

        signupCtrl.submit = function () {
            SignupService.checkDish(signupCtrl.favoriteDish).then(function (menuItem) {
                signupCtrl.dishValid = true;
                signupCtrl.dishInvalid = false;

                SignupService.user = {
                    firstName: signupCtrl.firstName,
                    lastName: signupCtrl.lastName,
                    email: signupCtrl.email,
                    phone: signupCtrl.phone,
                    menuItem: menuItem
                };
            }, function failure() {
                signupCtrl.dishValid = false;
                signupCtrl.dishInvalid = true;
            });
        };
    }
})();