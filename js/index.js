$(document).ready(function(){
	$('.ic-menu').click(function(){
		console.log('xxxx');
		$('.menu').toggleClass('active');
	})

	$('.menu .item, section').click(function(){
		$('.menu').removeClass('active');
	})

	$(window).resize(function(){
		$('.menu').removeClass('active');
	});

	$('.video-cont .video img').click(function(){
		$('.video-cont .video').append('<iframe width="560" height="315" src="https://www.youtube.com/embed/dVXsxqwEs3c?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
	});

	$('#main-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      dots: false,
      infinite: true,
      adaptiveHeight: true,
      arrows: true,
      prevArrow: '<img src="img/arrow-prev.png" class="arrow-prev" alt="prev"/>',
      nextArrow: '<img src="img/arrow-next.png" class="arrow-next" alt="next"/>',
  });
	$('.arrow-prev, .arrow-next').click(function(){$("video").each(function () { this.pause() });});

});

function scTo(id) {
	console.log(id);
  $('html, body').animate({
    scrollTop: $(id).offset().top + -185
  }, 'slow');
}
