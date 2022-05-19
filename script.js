$(document).ready(function() {
	$('.menu__burger').click(function(event) {
		$('.menu__nav').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function() {
	$('.menu__close').click(function(event) {
		$('.menu__nav').toggleClass('active');
		$('body').toggleClass('lock');
	});
});