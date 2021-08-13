// Двойной слайдер на первом экране

$(document).ready(function(){
	$('.offer__slider').slick({ // Инициализируем наш слайдер, обращаясь по классу к контейнеру со слайдами.
		arrows: false, // параметр отображени стрелок
		dots: true, // параметр отображени булетов
		slidesToShow: 1, // кол-во отображаемых одновременно слайдов
		infinite: true,
		speed: 1500,
		autoplaySpeed: 2000,
		easing: 'ease',
		autoplay: true,
		swipe: true,
		waitForAnimate: false,
		appendDots: $('.offer__dots-wrapper'),
		asNavFor: ".offer__fhoto-slider",
	});
	$('.offer__fhoto-slider').slick({
		arrows: false,
		infinite: true,
		speed: 1500,
		autoplaySpeed: 2000,
		easing: 'ease',
		swipe: true,
		waitForAnimate: false,
		asNavFor: ".offer__slider", // Двойной слайд. Указываем класс первого слайдера
	});

	// Слайдер Team Dream

	$('.team-slider').slick({
		dots: true,
		arrows: true,
		autoplay: true,
		speed: 1500,
		autoplaySpeed: 2000,
		easing: 'ease',
		responsive: [
			{
				breakpoint: 1239.98,
				settings: {
					arrows: false
				}
			},{
				breakpoint: 1199.98,
				settings: {
					arrows: true
				}
			},{
				breakpoint: 1039.98,
				settings: {
					arrows: false
				}
			},{
				breakpoint: 991.98,
				settings: {
					arrows: true
				}
			},{
				breakpoint: 804.98,
				settings: {
					arrows: false
				}
			},{
				breakpoint: 767.98,
				settings: {
					arrows: true
				}
			},{
				breakpoint: 594.98,
				settings: {
					arrows: false
				}
			},{
				breakpoint: 320,
				settings: {
					arrows: false
				}
			}
		]
	});

	// Sticky Header

	// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("sticky-header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

	// Плавная прокрутка к якорю

	var $page = $('html, body');
$('a[href*="new-collection"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
    return false;
});

});


