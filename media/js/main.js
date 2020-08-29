$(document).ready(function(){
	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion = barra * 0.10;

		$('.bloque.parallax').css({
			'background-position': '0 -' + posicion + 'px'
		});
	});
});