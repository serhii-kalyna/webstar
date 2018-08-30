$(document).ready(function() {

	
	if (window.innerWidth <= 640){
		$(".down-menu").click(function() {
			$("ul.dm", this).toggle();
		});

		$(".drop-mobile-menu").click(function() {
			$("ul.dm", this).toggle();
		});

		$(".right-menu1").click(function() {
			$("ul.rm1", this).toggle();
		});

		$(".right-menu2").click(function() {
			$("ul.rm2", this).toggle();
		});
	}
	else{
		$(".down-menu").click(function() {
			$("ul.dm", this).toggle();
		});

		$(".drop-mobile-menu").click(function() {
			$("ul.dm", this).toggle();
		});

		$(".right-menu1").hover(function() {
			$("ul.rm1", this).toggle();
		});

		$(".right-menu2").hover(function() {
			$("ul.rm2", this).toggle();
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