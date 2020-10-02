//CREATE PARALLAX EFFECT
let screenBg = document.querySelector('.bg');
this.addEventListener('scroll', function(){
screenBg.style.opacity = 1 - +this.pageYOffset/550+'';
screenBg.style.top = +this.pageYOffset+'px';
screenBg.style.backgroundPositionY = - + +this.pageYOffset/2+'px';
});


//CIRCLE PROGRESSBAR
$(document).ready(function ($) {
		function animateElements() {
			$('.progressbar').each(function () {
				let elementPos = $(this).offset().top;
				let topOfWindow = $(window).scrollTop();
				let percent = $(this).find('.circle').attr('data-percent');
				let percentage = parseInt(percent, 10) / parseInt(100, 10);
				let animate = $(this).data('animate');
				if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
					$(this).data('animate', true);
					$(this).find('.circle').circleProgress({
						startAngle: -Math.PI / 2,
						value: percent / 100,
						size:70,
						thickness: 8,
						emptyFill: "rgba(0,0,0,0.09)",
						fill: {
							color: '#819FF7'
						}
					}).on('circle-animation-progress', function (event, progress, stepValue) {
						$(this).find('div').text((stepValue*100).toFixed(1) + "%");
					}).stop();
				}
			});
		}

		animateElements();
		$(window).scroll(animateElements);	

	}); 

$('.burger').click(function(){
	$('.burger').toggleClass('active');
	$('.back-menu').toggleClass('active');
	$('.menu').toggleClass('active');
	$('.menu-list').toggleClass('active');
});
$('.menu__items').click(function(){
	$('.burger').removeClass('active');
	$('.back-menu').removeClass('active');
	$('.menu').removeClass('active');
	$('.menu-list').removeClass('active');
});