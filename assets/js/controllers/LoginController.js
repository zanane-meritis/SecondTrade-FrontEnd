angular.module('LoginController',['LoginService']).controller('LoginController',function($scope, $routeParams, $http, $location, LoginService){

	$scope.credentials = {};
	$scope.login = function(){
		LoginService.authenticate($scope.credentials,function(authenticated) {
			if (authenticated) {
				console.log("Login succeeded")
				$scope.error = false;
			} else {
				console.log("Login failed")
				$scope.error = true;
			}
		})
	};
});