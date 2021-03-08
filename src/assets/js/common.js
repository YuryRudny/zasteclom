import $ from 'jquery';
import swipe from 'jquery-touchswipe';


import svg4everybody from 'svg4everybody';

import {
	mainSlider,
	servicesSlider,
	usedMaterial,
	principles,
	recomendation,
	sertificate,
	news,
	partners,
	semiSlider,
	productPopup
} from "./sliders";



$(function () {

	svg4everybody();
	mainSlider();
	servicesSlider();
	usedMaterial();
	principles();
	recomendation();
	sertificate();
	news();
	partners();
	semiSlider();
	productPopup();

	$('img.border').wrap('<div class="border-images"></div>');

	// $('textarea').on('input', function (e) {
	// 	this.style.height = '1px';
	// 	this.style.height = (this.scrollHeight + 6) + 'px';
	// });

	$('.accordion__title').on('click', function () {
		if (!$(this).parents('.accordion__item').hasClass('active')) {
			$('.accordion__item').removeClass('active');
			$('.accordion__text').slideUp(300);
			$(this).parents('.accordion__item').addClass('active')
				.find('.accordion__text').slideDown(300);
		}
	});

	let inputs = $('input, textarea');
	inputs.focus(function () {
		var $self = $(this);
		$self.data('placeholder-tmp', $self.attr('placeholder'));
		$self.attr('placeholder', '');
	});

	inputs.blur(function (e) {
		var $self = $(this);
		$self.attr('placeholder', $self.data('placeholder-tmp'));
	});

	$('.decore-title').html(function () {
		let text = $(this).text().split(' ');
		let first = text.shift();
		if (text.length >= 1) {
			let last = text.pop();
			return `
						<span class="first">
							${first}
						</span> ${text.join(" ")} 
						<span class="last">
							${last}
						</span>
						`;
		} else {
			return `<span class="first">${first}</span>`;
		}
	});

	$('body')
		.on('click', '.product-popup__body .tabs__header li:not(.active)',
			function () {
				$(this)
					.addClass('active')
					.siblings()
					.removeClass('active')
					.closest('div.product__tabs')
					.find('div.tabs__content')
					.removeClass('active')
					.eq($(this)
						.index())
					.addClass('active');
			});
	let menuOpen = function () {
		$('body').addClass('fix');
		$('.mobile__menu').addClass('active');
		$('.overlay').addClass('active');
	};
	let menuClose = function () {
		$('body').removeClass('fix');
		$('.mobile__menu').removeClass('active');
		$('.overlay').removeClass('active');
	};

	$('.menu__toggle').click(function (e) {
		console.log(e.target);
		menuOpen();
	});

	$('.overlay').click(function () {
		menuClose();
	});


	$(".mobile__menu").swipe({
		swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
			if (direction == 'left') {
				menuClose();
			}
		}
	});
	$(".overlay").swipe({
		swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
			if (direction == 'left') {
				menuClose();
			}
		}
	});

	$(".menu-swipe").swipe({
		swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
			if (direction == 'right') {
				menuOpen();
			}
		}
	});


	$('.menu-btn-close').click(function () {
		menuClose();
	});

	$('.mobile__menu .dropdown i').click(function () {
		let parent = $(this).parents('.dropdown');
		if (parent.hasClass('menu_open')) {
			parent.removeClass('menu_open');
			parent.find('.mobile__hidden-menu').slideUp();
		} else {
			$('.mobile__menu .dropdown').removeClass("menu_open");
			$('.mobile__hidden-menu').slideUp();
			parent.addClass("menu_open");
			parent.find('.mobile__hidden-menu').slideDown();
		}
	});

	$(".showcase-tabs__content").hide();
	$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
		$(this)
			.addClass('active')
			.siblings().removeClass('active')
			.closest('div.showcase-tabs')
			.find('div.showcase-tabs__content')
			.removeClass('active')
			.eq($(this).index()).addClass('active');
	});



});