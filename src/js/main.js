var scriptsJS = (function($){


function scrollEffects() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: (target.offset().top + 100)
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

	$("nav").hover(function() {
		$(".nav-bar").removeClass("nav-bar-ghost");
	}, function() {
		if (scroll_top >= 1) {
			$(".nav-bar").addClass("nav-bar-ghost");
		}
	});

	$(window).scroll(function () {
		var scroll_top = $(this).scrollTop();
		if($(window).width() < 980) {
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
			if (scroll_top >= 145) {
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
			$('[data-fade]').addClass('fadeInUp');
		}
	});
}


//  ==========================================================================
//  Init
//  ==========================================================================	
function init(){
	$(document).ready(function(){
		console.log("hey man");
		scrollEffects();
	});
}

// PUBLIC METHODS
	return {
		init: init
	};

})(jQuery);
scriptsJS.init();