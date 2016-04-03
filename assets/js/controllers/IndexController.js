angular.module('IndexController',['LoginService']).controller('IndexController',function($scope,$http,$location,LoginService){
	$scope.isActive = function(route){
		return route === $location.path();
	}
	$scope.authenticated = function() {
		return LoginService.authenticated;
	}
	$scope.logout = function() {
		LoginService.clear();
	}
});

