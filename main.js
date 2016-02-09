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
			service: $scope.service,
			groomers: $scope.groomers,
			availableDates: []
		}
		$scope.greenMessage = "First, choose your groomer(s)"
		$scope.groomers = []
		$scope.service = "Select a Service"
		$scope.selectedGroomers = function() {
			if($scope.selectedGroomerAlli) {
				$scope.groomers.push("Alli")
			}
			if($scope.selectedGroomerEmily) {
				$scope.groomers.push("Emily")
			}
			if($scope.selectedGroomerAmber) {
				$scope.groomers.push("Amber")
			}
			$scope.hideForms = true
			$scope.showForms = true
			$scope.greenMessage = "Next, complete these forms."
		}
		$scope.subInfo = function() {
			$scope.showCustomer = true
			$scope.greenMessage = "Now choose the date."
			$scope.showDates = true
			$scope.showForms = false
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
		$scope.dates = []
		var x = 7
		var y = 0
		var today = new Date()
		$scope.addDates = function() {
			for(var i = y; i < x; i++){
				$scope.newDate = {
					date: new Date().setDate(today.getDate() + i),
					bookAppointment: false
				}
				$scope.dates.push($scope.newDate)
				$scope.newDate = {}
			}
		}
		$scope.bookTime = function(date) {
			$scope.bookAppointment = true
		}
		$scope.moreDates = function() {
			x += 7
			y += 7
			$scope.addDates()
		}
		$scope.addDates()
	}])