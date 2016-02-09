angular.module('calendarMod', [])
angular.module('calendarMod')
	.controller('calendarController', ['$scope', function($scope){
		
		$scope.times = ["8:00am", "8:30am", "9:00am", "9:30am", "10:00am", "10:30am", "11:00am", "11:30am", "12:00pm", "12:30pm", "1:00pm", "1:30pm", "2:00pm", "2:30pm", "3:00pm", "3:30pm", "4:00pm", "4:30pm", "5:00pm"]

		$scope.greenMessage = "First, choose your groomer(s)"
		$scope.groomers = []
		$scope.service = "Select a Service"
		$scope.showGroomerAlli = true
		$scope.showGroomerEmily = true
		$scope.showGroomerAmber = true
		$scope.selectedGroomers = function() {
			if($scope.selectedGroomerAlli) {
				$scope.groomers.push("Alli")
			} else {$scope.showGroomerAlli = false}
			if($scope.selectedGroomerEmily) {
				$scope.groomers.push("Emily")
			} else {$scope.showGroomerEmily = false}
			if($scope.selectedGroomerAmber) {
				$scope.groomers.push("Amber")
			} else {$scope.showGroomerAmber = false}
			$scope.hideForms = true
			$scope.showForms = true
			$scope.greenMessage = "Next, complete the forms to the right."
		}
		$scope.subInfo = function() {
			$scope.showCustomer = true
			$scope.greenMessage = "Now choose the date."
			$scope.showDates = true
			$scope.showForms = false
			$scope.showGroomerAlli = false
			$scope.showGroomerEmily = false
			$scope.showGroomerAmber = false
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

			date.bookAppointment = true
		}
		$scope.pushAppointment = function(date, time) {
			$scope.appointment = {
				date: date,
				time: time
			}
			$scope.newCustomer.availableDates.push($scope.appointment)
			$scope.appointment = {}
			date.bookAppointment = false


		}
		$scope.moreDates = function() {
			x += 7
			y += 7
			$scope.addDates()
		}
		$scope.addDates()
		$scope.newCustomer = {
			availableDates: [],
		}
		$scope.submitRequest = function() {
			$scope.showDates = false
			$scope.greenMessage = "Verify that the information below is correct."
			$scope.showSubmitButton = true
			$scope.submitAll = true
		}
		$scope.submitted = function() {
			$scope.greenMessage = "Thank you for your submission!"
			$scope.showFinalMessage = true
		}
	}])


















