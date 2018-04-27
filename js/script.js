$(function(){
	console.log('DOM loaded - you can have fun');	//this code will execute after the DOM is loaded
	var carouselList = $('#carousel ul');
	var licznik = 0;
	fillDots (licznik);

	var myTimer = setInterval(changeSlide, 3000);

	console.log(carouselList + 'carouselList');

	function changeSlide(speed){	
		licznik ++;
		carouselList.animate({'marginLeft': -500}, speed, moveFirstSlide);
		if (licznik==5){
			licznik=0;
		}
		fillDots(licznik);
	}

	function moveSlidesBack (speed){
		carouselList.animate({'marginLeft': 500}, speed, moveLastSlide);
		licznik--;	
	}


	function fillDots (nrSlajd){
		$('#menu li').removeClass('active');
		$('#menu li').eq(nrSlajd).addClass('active');

		//$('#menu li').css('border', '1px solid white').css('background-color', 'none');
		//$('#menu').find("li").eq(nrSlajd).css('background-color', 'white');
		//$("#menu li:not(#p)").css("background-color", "yellow");
	}

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


	function getIndexOfLi (dotIndex) {

		var firstItem = carouselList.find('li:first');
		//var liItemsList = $('#carousel ul li');
		var liItemsList = carouselList.find('li');

		var newfirstItem = liItemsList.get(dotIndex);
		firstItem.before(newfirstItem);
		carouselList.css({'margin-left': 0})
	}


	$li = $('#menu li');

	$li.click(function() {
		clearInterval(myTimer);
	  	var index = $li.index( this );
		fillDots(index);

		if (licznik<index) {
			for (i=licznik; i<index; i++){
				changeSlide(300);
			}
		} else if (licznik>index) {
			for (i=licznik; i>index; i--){
				moveSlidesBack(300);
			}
		}
		myTimer = setInterval(changeSlide, 3000);
	  
	});

});

