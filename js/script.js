$(function(){
	
	var carouselList = $('#carousel ul');
	var licznik = 0;
	fillDots (licznik);		// set a first dot as active

	var myTimer = setInterval(changeSlide, 3000);
	var length = $('#menu li').length;

	function carouselGoesLeft (){
		var myTimer = setInterval(changeSlide, 3000);
	};

	function changeSlide(speed){	
		licznik ++;
		carouselList.animate({'marginLeft': -500}, speed, moveFirstSlide);
		if (licznik==length){
			licznik=0;
		}
		fillDots(licznik);		//	change the active dot
	};

	function moveSlidesBack (speed){
		carouselList.animate({'marginLeft': 500}, speed, moveLastSlide);
		if (licznik==0){
			licznik=length;
		}
		licznik--;	
		fillDots(licznik);		//	change the active dot
	};


	function fillDots (nrSlajd){
		$('#menu li').removeClass('active');
		$('#menu li').eq(nrSlajd).addClass('active');
	};

	function moveFirstSlide(){
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');
		lastItem.after(firstItem);
		carouselList.css({'margin-left': 0})
	};

	function moveLastSlide(){
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');
		firstItem.before(lastItem);
		carouselList.css({'margin-left': 0})
	};

	$li = $('#menu li');
	$li.click(function() {
		clearInterval(myTimer);
	  	var index = $li.index( this );
		
		fillDots(index);

		if (licznik<index) {
			for (i=licznik; i<index; i++){
				changeSlide(300);			// checks a clicked dot and moves carousel left
			}
		} else if (licznik>index) {
			for (i=licznik; i>index; i--){
				moveSlidesBack(300);		// checks a clicked dot and moves carousel right
			}
		}
		myTimer = setInterval(changeSlide, 3000);
	});

	$('.fa-chevron-circle-left').click(function(){
		clearInterval(myTimer);
		moveSlidesBack(300);
		myTimer = setInterval(moveSlidesBack, 3000);
	});

	$('.fa-chevron-circle-right').click(function(){
		clearInterval(myTimer);
		changeSlide(300);	
		myTimer = setInterval(changeSlide, 3000);	
	});


});

