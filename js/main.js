$(document).ready(function() {

	if (window.innerWidth <= 640){
		$(".drop-mobile-menu").click(function() {
			$(this).find("ul:first").toggle();
		});
		$(".right-menu").hover(function() {
			$(this).find("ul:first").toggle();
		});
	} 
	else{
		$(".down-menu").click(function() {
			$(this).find("ul:first").toggle();
		});
		$(".right-menu").hover(function() {
			$(this).find("ul:first").toggle();
		});
	}

	$('.slider').slick({
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
	});
})