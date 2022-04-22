$( document ).ready(function() {
	
	function nav(){
		$('.nav-toggle').click(function(){
			$('.nav').toggleClass('open');
		});
	}

	// Smooth Scroll Code
	
	function smoothScroll(){
		$(document).on('click', 'a[href^="#"]', function (event) {
		    event.preventDefault();
		    $('html, body').animate({
		        scrollTop: $($.attr(this, 'href')).offset().top
		    }, 500);
		});
	}
	
	// Full Slider Code

	function fullSlider(){
		const sliderImageList = document.getElementById("slider_image_list").querySelectorAll('li');
		const nextButton = document.getElementById("next_button");
		nextButton.addEventListener("click", changeActiveClassToNext);
		nextButton.list = sliderImageList;
		const backButton = document.getElementById("back_button");
		backButton.addEventListener("click", changeActiveClassToPrev);
		backButton.list = sliderImageList;
	}

	function changeActiveClassToNext(event) {
		let list = event.currentTarget.list;
		let currentActiveIndex;
		let targetActiveIndex;
		list.forEach((item, index) => {
			if (item.classList.contains("active")) {
				currentActiveIndex = index;
			};
		});
		switch(currentActiveIndex) {
			case 0:
				targetActiveIndex = currentActiveIndex + 1;
			  // code block
			  break;
			case 1:
			  // code block
				targetActiveIndex = currentActiveIndex + 1;
			  break;
			case 2:
				targetActiveIndex = 0;
			  break;
			default:
			  // code block
		  }
		// remove active class from current picture
		list[currentActiveIndex].classList.remove("active");
		// add active class to next picture
		list[targetActiveIndex].classList.add("active");
	}


	function changeActiveClassToPrev(event) {
		let list = event.currentTarget.list;
		let currentActiveIndex;
		let targetActiveIndex;
		list.forEach((item, index) => {
			if (item.classList.contains("active")) {
				currentActiveIndex = index;
			};
		});
		switch(currentActiveIndex) {
			case 0:
				targetActiveIndex = 2;
			  // code block
			  break;
			case 1:
			  // code block
				targetActiveIndex = currentActiveIndex - 1;
			  break;
			case 2:
				targetActiveIndex = currentActiveIndex - 1;
			  break;
			default:
			  // code block
		  }
		// remove active class from current picture
		list[currentActiveIndex].classList.remove("active");
		// add active class to next picture
		list[targetActiveIndex].classList.add("active");
	}

	nav();

	smoothScroll();

	fullSlider();
});

// Form code
const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (e) => {
	e.preventDefault();
	let email = document.getElementById("form_email").value;
	let subject = document.getElementById("form_subject").value;
	let message = document.getElementById("form_text").value;

	$.ajax({
		type: 'POST',
		url: 'login.php',
		data: {email: email, subject: subject, message: message},
		success: function(data) {
		  console.log('Form has been submitted')
		},
		error: function(data) {
			console.log('error')
		}
	  });
});