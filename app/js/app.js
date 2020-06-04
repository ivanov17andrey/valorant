document.addEventListener("DOMContentLoaded", function () {
	
	$('.agents__slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		variableWidth: true,
		focusOnSelect: true,
		asNavFor: '.abilities-slider'
	});

	$('.abilities-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		swipe: false,
		// vertical: true,
		speed: 1,
		// variableWidth: true,
		asNavFor: '.agents__slider',
		nextArrow: '<div class="abilities-slider__btn slick-next"><div class="abilities-slider__inner"></div></div>',
		prevArrow: ''
	});

});
