angular.module("meanCrudApp",[]).controller("employeeController", function($scope, $http) {

		$http.get('/api/employees')
			.success(function(data){
				$scope.employees = data;
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	});
