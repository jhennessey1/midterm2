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
			$scope.greenMessage = "Next, complete these forms."
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
			$scope.readySubmit = true
		}
		$scope.submitted = function() {
			$scope.greenMessage = ""
			$scope.showFinalMessage = true
			$scope.noEdit = true
			$scope.readySubmit = false
			$scope.showForms = false
			$scope.showDates = false
		}
		$scope.file = "Not Uploaded"
		$scope.fileUpload = function() {
			$scope.file = "File Uploaded (awaiting validation)"
		}
		$scope.editInfo = function() {
			$scope.showDates = false
			$scope.showForms = true
			$scope.showCustomer = false
			$scope.greenMessage = "Edit Customer Info..."
		}

		$scope.randomQuoteGen = function() {
			$scope.quotes = ["Cleanliness is next to dogliness", "You can say any foolish thing to a dog, and the dog will give you a look that says, ‘Wow, you’re right! I never would’ve thought of that!'", "Dogs are not our whole life, but they make our lives whole.", "Every dog has his day, unless he loses his tail, then he has a weak-end.", "The better I get to know men, the more I find myself loving dogs.", "To his dog, every man is Napoleon; hence the constant popularity of dogs.", "Anybody who doesn’t know what soap tastes like never washed a dog.", "Outside of a dog, a book is man’s best friend. Inside of a dog it’s too dark to read.", "If you think dogs can’t count, try putting three dog biscuits in your pocket and then give him only two of them.", "The average dog is a nicer person than the average person.", "I wonder if other dogs think poodles are members of a weird religious cult.", "Happiness is a warm puppy.", "If I have any beliefs about immortality, it is that certain dogs I have known will go to heaven, and very, very few persons.", "If you want a friend in Washington, get a dog.", "My dog is worried about the economy because Alpo is up to $3.00 a can. That’s almost $21.00 in dog money.", "If a dog will not come to you after having looked you in the face, you should go home and examine your conscience.", "I bought my grandmother a Seeing Eye dog. But he's a little sadistic. He does impressions of cars screeching to a halt.", "My Labrador retriever had a nervous breakdown. I kept throwing him a boomerang.", "A watchdog is a dog kept to guard your home, usually by sleeping where a burglar would awaken the household by falling over him.", "Dogs have owners, cats have staff.", "It's no coincidence that man's best friend cannot talk.", "To err is human—to forgive, canine.", "A dog teaches a boy fidelity, perseverance, and to turn around three times before lying down.", "In order to keep a true perspective of one's importance, everyone should have a dog that will worship him and a cat that will ignore him.", "The great pleasure of a dog is that you may make a fool of yourself with him and not only will he not scold you, but he will make a fool of himself too.", "I'm a mog. Half man, half dog. I'm my own best friend.", "If dogs could talk, perhaps we'd find it just as hard to get along with them as we do people.", "Dogs lead a nice life. You never see a dog with a wristwatch.", "What does a dog do on his day off? He can't lie around - that's his job.", "A lawyer is just like an attack dog, only without a conscience.", "When a dog bites a man that is not news, but when a man bites a dog that is news.", "Why can't a woman be more like a dog, huh? So sweet, loving, attentive.", "Animals generally return the love you lavish on them by a swift bite in passing—not unlike friends and wives.", "You enter into a certain amount of madness when you marry a person with pets.", "If your dog thinks you're the greatest person in the world, don't seek a second opinion.", "Properly trained, a man can be dog's best friend.", "Life is like a dogsled team. If you ain't the lead dog, the scenery never changes.", "I hope if dogs ever take over the world, and they choose a king, they don't just go by size, because I bet there are some Chihuahuas with some good ideas.", "If there was a terrible storm outside, but somehow this dog lived through the storm, and he showed up at your door when the storm was finally over, I think a good name for him would be Carl.", "If they have moving sidewalks in the future, when you get on them, I think you should have to assume sort of a walking shape so as not to frighten the dogs.", "People teach their dogs to sit; it's a trick. I've been sitting my whole life, and a dog has never looked at me as though he thought I was tricky.", "Whoever said you can't buy happiness forgot little puppies.", "They never talk about themselves but listen to you while you talk about yourself, and keep up an appearance of being interested in the conversation."]

			$scope.i = Math.floor(Math.random() * $scope.quotes.length)
			return $scope.quotes[$scope.i]
				
			}

		$scope.randomQuoteGen()	
	}])


















