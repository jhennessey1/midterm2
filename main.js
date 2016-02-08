angular.module('calendarMod', [])
angular.module('calendarMod')
	.controller('calendarController', ['$scope', function($scope){
		$scope.newCustomer = {
			name: $scope.customerName,
			phone: $scope.phone,
			email: $scope.email,
			dogName: $scope.dogName,
			breed: $scope.breed,
			weight: $scope.weight,
			service: $scope.service
		}
		$scope.service = "Select a Service"
		$scope.subInfo = function() {
			$scope.showCustomer = true
		}
		$scope.serviceBath = function() {
			$scope.service = "Bath and Brush"
		}
		$scope.serviceFFT = function() {
			$scope.service = "Face, Feet and Tail"
		}
		$scope.serviceFullGroom = function() {
			$scope.service = "Full Groom"
		}
	}])