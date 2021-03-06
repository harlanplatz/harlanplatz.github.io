$(document).ready(function() {

	/***************** Waypoints ******************/

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInRight');
	}, {
		offset: '75%'
	});

	/***************** Initiate Flexslider ******************/
	$('.flexslider').flexslider({
		animation: "slide"
	});

	/***************** Initiate Fancybox ******************/

	$('.single_image').fancybox({
		padding: 4,
	});

	/***************** Tooltips ******************/
    $('[data-toggle="tooltip"]').tooltip();

	/***************** Nav Transformicon ******************/

//	/* When user clicks the Icon */
//	$('.nav-toggle').click(function() {
//		$(this).toggleClass('active');
//		$('.header-nav').toggleClass('open');
//		event.preventDefault();
//	});
//	/* When user clicks a link */
//	$('.header-nav li a').click(function() {
//		$('.nav-toggle').toggleClass('active');
//		$('.header-nav').toggleClass('open');
//
//	});

	/***************** Header BG Scroll ******************/

//	$(function() {
//		$(window).scroll(function() {
//			var scroll = $(window).scrollTop();
//
//			if (scroll >= 20) {
//				$('section.navigation').addClass('fixed');
//				$('header').css({
//					"border-bottom": "none",
//					"padding": "5px 0"
//				});
//				$('header .member-actions').css({
//					"top": "26px",
//				});
//				$('header .navicon').css({
//					"top": "34px",
//				});
//			} else {
//				$('section.navigation').removeClass('fixed');
//				$('header').css({
//					"border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
//					"padding": "5px 0"
//				});
//				$('header .member-actions').css({
//					"top": "41px",
//				});
//				$('header .navicon').css({
//					"top": "48px",
//				});
//			}
//		});
//	});
//	/***************** Smooth Scrolling ******************/
//
//	$(function() {
//
//		$('a[href*=#]:not([href=#])').click(function() {
//			if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
//
//				var target = $(this.hash);
//				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//				if (target.length) {
//					$('html,body').animate({
//						scrollTop: target.offset().top
//					}, 2000);
//					return false;
//				}
//			}
//		});
//
//	});
//
//});




(function() {

    var quotes = $(".quotes");
    var quoteIndex = -1;
    
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(1000)
            .delay(6000)
            .fadeOut(1000, showNextQuote);
    }
    
    showNextQuote();
    
})();











var bgColor;
var effect = 'animated bounceInLeft'; /* bounceIn, bounceInUp, bounceInDown, bounceInLeft,
										 bounceInRight, rotateIn, rotateInUpLeft, rotateInDownLeft,
										 rotateInUpRight, rotateInDownRight  */

$('.all-content').hide();

$('.content li').click(function(){
	$('.card-front, .card-back').hide();
	$('.content li').removeClass('active').hide().css('border','none');
	$(this).addClass('active').show();
	bgColor = $('.active .card-back').css('background-color');
	$('.content').css('background-color',bgColor);
	$('.close, .all-content').show();
	$('.responsive').append('<span class="close">close</span>').addClass(effect);
});


$('.responsive').on('click', '.close', function(){

	$('.close').remove();
	bgColor = $('.active .card-front').css('background-color');
	$('.responsive').removeClass(effect);
	$('.all-content').hide();
	$('.content li').removeClass('active').show().css({ 'border-bottom':'1px solid #2c2c2c',
													    'border-left':'1px solid #2c2c2c' });
	$('.card-front, .card-back').show();
	$('.content').css('background-color',bgColor);
});