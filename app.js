$(() => {
	$(window).scroll(() => {
		console.log($(window).scrollTop());

		if ($(window).scrollTop() > 450) {
			$('.navbar').fadeIn().addClass('navbar-fixed');
		}

		if ($(window).scrollTop() < 451) {
			$('.navbar').removeClass('navbar-fixed');
		}
	});
});
