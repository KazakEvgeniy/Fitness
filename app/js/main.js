$(function () {

	$('.top-slider__inner').slick({
		nextArrow: false,
		prevArrow: false,


		prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-left.svg" alt="arrow"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-right.svg" alt="arrow"></button>'

	});

	$('.timetable__slider').slick({
		nextArrow: false,
		prevArrow: false,
		prevArrow: '<button type="button" class="timetable__slick-prev"><img src="images/icons/arrow-leftSlider.png" alt="arrow"></button>',
		nextArrow: '<button type="button" class="timetable__slick-next"><img src="images/icons/arrow-rightSlider.png" alt="arrow"></button>'
	});




	$('.timetable__filter-btn').on('click', function () {
		$('.timetable__filter-btn').removeClass('building--active');
		$(this).addClass('building--active');
	});

	$('.button-build').on('click', function () {
		$('.timetable__inner').addClass('hidden');
		$('.build').addClass('build--active');
		$('.boxing').removeClass('boxing--active');
		$('.yoga').removeClass('yoga--active');
		$('.karate').removeClass('karate--active');
	});

	$('.button-boxing').on('click', function () {
		$('.timetable__inner').addClass('hidden');
		$('.boxing').addClass('boxing--active');
		$('.build').removeClass('build--active');
		$('.yoga').removeClass('yoga--active');
		$('.karate').removeClass('karate--active');
	});

	$('.button-yoga').on('click', function () {
		$('.timetable__inner').addClass('hidden');
		$('.yoga').addClass('yoga--active');
		$('.build').removeClass('build--active');
		$('.boxing').removeClass('boxing--active');
		$('.karate').removeClass('karate--active');
	});

	$('.button-karate').on('click', function () {
		$('.timetable__inner').addClass('hidden');
		$('.karate').addClass('karate--active');
		$('.build').removeClass('build--active');
		$('.boxing').removeClass('boxing--active');
		$('.yoga').removeClass('yoga--active');
	});

	$('.button-all').on('click', function () {
		$('.timetable__inner').removeClass('hidden');
	});





});