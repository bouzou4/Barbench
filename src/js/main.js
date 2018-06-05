// protect the namespace!
var scriptsJS = (function($){

//  ==========================================================================
//  Scrolling Code
//  ==========================================================================	
function scrollEffects() {
	// initialize smooth scrolling on same-page links
	$('a[href*=\\#]:not([href=\\#])').click(function() {
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

	// sticky nav code (used to use slicknav.js)
	$(window).scroll(function () {
		var scroll_top = $(this).scrollTop();
		
		console.log(scroll_top);

		if (scroll_top >= 1) {
			$(".navbar").addClass("animate");
			$(".navbar").addClass("nav-bar-ghost");
		} 
		else {
			$(".navbar").removeClass("nav-bar-ghost");
		}

		if($(window).width() < 980) {
			if (scroll_top >= 1) {
				$(".navbar").addClass("nav-float");
				$(".navbar").removeClass("nav-bar-ghost");
			} 
			else {
				$(".navbar").removeClass("nav-float");
				$(".navbar").addClass("animate");
			}
		}
		if($(window).width() > 980) {
			if (scroll_top >= 145) {
				$(".navbar").addClass("nav-float");
			} 
			else {
				$(".navbar").removeClass("nav-float");
				$(".navbar").addClass("animate");
			}
		}
	});

	$(window).scroll(function () {
		var scroll_top = $(this).scrollTop();
		if ((scroll_top >= 580)) {
			$('[data-fade]').addClass('fadeInUp');
		}
	});

	// bring back nav on hover
	$("nav").hover(function() {
		$(".navbar").removeClass("nav-bar-ghost");
	});
}


//  ==========================================================================
//  Init
//  ==========================================================================	
function init(){
	$(document).ready(function(){
		console.log("hey man");
		scrollEffects();
		$('.carousel').carousel({ 
			interval: 5000,
			pause: "hover"
		});
	});
}

// PUBLIC METHODS
	return {
		init: init
	};

})(jQuery);

scriptsJS.init();