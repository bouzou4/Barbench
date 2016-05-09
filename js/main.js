var scriptsJS = (function($){

function makeCarousel() {
	$('[data-carousel]').owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		slideSpeed: 1600,
		autoplayTimeout: 5000
	});
}

function mobileNav() {
	$('.nav-bar').slicknav({
		label: "",
		closeOnClick: true
	});
}

function scrollEffects() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: (target.offset().top - 100)
				}, 1000);
			return false;
			}
		}
	});

	$(window).scroll(function () {
		var scroll_top = $(this).scrollTop();
		if (scroll_top >= 1) {
			$(".nav-bar").addClass("animate");
			$(".nav-bar").addClass("nav-bar-ghost");
		} 
		else {
		$(".nav-bar").removeClass("nav-bar-ghost");
		}
	});
	$(window).scroll(function () {
		var scroll_top = $(this).scrollTop();
		if($(window).width() < 980) {
			console.log("mobile");
			if (scroll_top >= 1) {
				$(".slicknav_menu").addClass("nav-float");
			} 
			else {
			$(".slicknav_menu").removeClass("nav-float");
				$(".slicknav_menu").addClass("animate");
			}
		}
		if($(window).width() > 980) {
			console.log("desktop");
			if (scroll_top >= 185) {
				$(".nav-bar").addClass("nav-float");
			} 
			else {
			$(".nav-bar").removeClass("nav-float");
				$(".nav-bar").addClass("animate");
			}
		}
	});
	$(window).scroll(function () {
		var scroll_top = $(this).scrollTop();
		if ((scroll_top >= 580)) {
			$('.fade').addClass('fadeInUp');
		}
	});
}


//  ==========================================================================
//  Init
//  ==========================================================================	
function init(){
	$(document).ready(function(){
		console.log("hey man");
		makeCarousel();
		scrollEffects();
		mobileNav();
	});
}

// PUBLIC METHODS
	return {
		init: init
	};

})(jQuery);
scriptsJS.init();