var app = angular.module('SecondTradeApp',['ngRoute','IndexController','LoginController','LoginService']);
app.config(function($routeProvider,$httpProvider) {
	$routeProvider
		.when('/features', {
			templateUrl:'views/features.html',
		})
		.when('/contact', {
			templateUrl:'views/contact.html',
		})
		.when('/admin', {
			templateUrl:'views/admin.html'
		})
		.otherwise('/');
	//$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
}).run(function(LoginService){
	LoginService.init('/', 'login', 'logout');
});
