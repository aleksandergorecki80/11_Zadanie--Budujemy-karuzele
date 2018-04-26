// This get all DOM element after it's loaded

$(function(){
	console.log('DOM loaded - you can have fun');	//this code will execute after the DOM is loaded
	var carouselList = $('#carousel ul');
	var licznik = 0;
	fillDots (licznik);

	setInterval(changeSlide, 3000);

	console.log(carouselList + 'carouselList');

	function changeSlide(){	
		licznik ++;
		carouselList.animate({'marginLeft': -500}, 500, moveFirstSlide);
		if (licznik==5){
			licznik=0;
		}
		fillDots(licznik);

		console.log(licznik + 'licz');
	}



function fillDots (nrSlajd){
	$('#menu li').css('background-color', 'white');
	$('#menu').find("li").eq(nrSlajd).css('background-color', 'red');
console.log(licznik + 'poza funkcją');
}

	function moveFirstSlide(){
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');
		lastItem.after(firstItem);
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
  var index = dot.index( this );
  //var dotNr = dot.eq(index);
fillDots(index);

console.log(index + 'licz index');
console.log(licznik + 'licz move');

for (i=licznik; i<index; i++){
	carouselList.animate({'marginLeft': -500}, 50, moveFirstSlide);
}

  //getIndexOfLi(index);
});



});

