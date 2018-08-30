$(document).ready(function() {

	$(".show-menu").click(function(){
		$("#block-menu-active").toggle();
	});

	$(".hide-menu").click(function(){
		$("#block-menu-active").toggle();
	});

	if (window.innerWidth <= 480){
		$('.slider-block-box').slick({
			dots: false,
			infinite: false,
			slidesToShow: 0,
			slidesToScroll: 0,
			autoplay: false,
			autoplaySpeed: 0,
		});
	}
	if (window.innerWidth <= 760){
		$('.slider-block-box').slick({
			dots: false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 2000,
		});
	}
	else if (window.innerWidth <= 1070){
		$('.slider-block-box').slick({
			dots: false,
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 2000,
		});
	}
	else {
		$('.slider-block-box').slick({
			dots: false,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 2000,
		});
	}

});

	// $('.slider2').slick({
	// 	dots: true,
	// 	infinite: false,
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1,
	// 	autoplay: true,
	// 	autoplaySpeed: 2000,
	// });

	// $('.slider3').slick({
	// 	dots: false,
	// 	infinite: true,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	autoplay: false,
	// 	autoplaySpeed: 2000,
	// });