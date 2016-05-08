app.factory('FirebaseFactory', function($rootScope, Auth) {
	var factory = {};
	factory.ref = new Firebase("https://crackling-inferno-5205.firebaseio.com/");
	factory.uid = null;
	factory.signup = function(email, password) {
		var that = this;
		console.log(arguments);
		that.ref.createUser({
			email    : email,
			password : password
		}, function(error, userData) {
			if (error) {
				console.log("Error creating user:", error);
			} else {
				console.log("Successfully created user account with uid:", userData.uid);
				that.uid = userData.uid;
				$rootScope.$broadcast('signed in', {uid: userData.uid, email: email});
			}
		});
	}
	factory.login = function(email, password) {
		var that = this;
		console.log(arguments);
		that.ref.authWithPassword({
			email    : email,
			password : password
		}, function(error, authData) {
			if (error) {
				console.log("Login Failed!", error);
			} else {
				console.log("Authenticated successfully with payload:", authData)
        Auth.uid = authData.uid;
				that.uid = authData.uid;
				$rootScope.$broadcast('signed in', {uid: authData.uid, email: authData.auth.token.email});
			}
		});
	}
	factory.logout = function() {
		this.uid = null;
		$rootScope.$broadcast('signed in', null);
	}
	return factory;
});
