app.config(function ($stateProvider) {

    $stateProvider.state('signup', {
        url: '/signup',
        templateUrl: 'js/signup/signup.html',
        controller: 'LoginCtrl'
    });

});

app.controller('SignupCtrl', function ($scope, AuthService, $state, FirebaseFactory) {

    $scope.signup = {};
    $scope.error = null;

    $scope.sendLogin = function (signupInfo) {
		
		console.log(signupInfo);
		FirebaseFactory.signup(signupInfo.email, signupInfo.password);
		/*
        $scope.error = null;

        AuthService.login(loginInfo).then(function () {
            $state.go('home');
        }).catch(function () {
            $scope.error = 'Invalid login credentials.';
        });
		*/
    };

});
