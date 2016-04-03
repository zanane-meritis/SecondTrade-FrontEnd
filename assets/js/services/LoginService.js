angular.module('LoginService',[])
.factory('LoginService',function($http, $location){
	var LoginService = {
		authenticated : false,

		loginPath : 'login',
		logoutPath : 'logout',
		homePath : '/',

		authenticate : function(credentials, callback) {

			var data = "username="+credentials.username+"&password="+credentials.password+"&submit=Login";

			$http.post(LoginService.loginPath, data, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				}
			}).
			success(function(data) {
				if (data.authenticated) {
					LoginService.authenticated = true;
				} else {
					LoginService.authenticated = false;
				}
				$location.path(LoginService.homePath);
				callback && callback(LoginService.authenticated);
			}).
			error(function(data){
				LoginService.authenticated = false;
				callback && callback(false);
				console.warn('This is a wrong username or/and a wrong password. Try again');
			});
		},

		init : function(homePath, loginPath, logoutPath) { 
			LoginService.homePath = homePath;
			LoginService.loginPath = loginPath;
			LoginService.logoutPath = logoutPath;
		},

		clear : function() { 
			LoginService.authenticated = false;
			
			$http.get(LoginService.logoutPath, {});
			$location.path(LoginService.loginPath);
		}
	};
	return LoginService;
});
