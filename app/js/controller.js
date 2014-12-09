var app = angular.module('myApp',[]);

app.controller('appController', ['$scope', '$filter', function($scope, $filter) {
	$scope.name = '';
	
	$scope.uppercasehandle = function() {
		return $filter('uppercase')($scope.name);
	
	};
}]);