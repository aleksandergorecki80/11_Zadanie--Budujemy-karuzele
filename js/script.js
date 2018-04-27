// This get all DOM element after it's loaded

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
	$('#menu li').css('border', '1px solid white').css('background-color', 'none');
	$('#menu').find("li").eq(nrSlajd).css('background-color', 'white');
	var puste = $('#menu li').not(nrSlajd).css('border', '1px solid white').css('background-color', 'none');
console.log(licznik + 'poza funkcją');
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


/*
function getIndexOfLi (dotIndex) {

	var firstItem = carouselList.find('li:first');
	//var liItemsList = $('#carousel ul li');
	var liItemsList = carouselList.find('li');

	var newfirstItem = liItemsList.get(dotIndex);
	firstItem.before(newfirstItem);
	carouselList.css({'margin-left': 0})
}
*/


function getIndexOfLi (dotIndex) {

	var firstItem = carouselList.find('li:first');
	//var liItemsList = $('#carousel ul li');
	var liItemsList = carouselList.find('li');

	var newfirstItem = liItemsList.get(dotIndex);
	firstItem.before(newfirstItem);
	carouselList.css({'margin-left': 0})
}






var dot = $('#menu li');

dot.click(function() {
	clearInterval(myTimer);
  var index = dot.index( this );
  //var dotNr = dot.eq(index);
fillDots(index);


console.log(licznik + ' = licznik');
console.log(index + ' = index');

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
  //getIndexOfLi(index);
});



});

