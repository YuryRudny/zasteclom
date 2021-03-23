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
	productSlider,
	portfolioSlider,
	aboutSlider,
} from "./sliders";

import {
	productPopup
} from "./popup";

import {
	quiz
} from "./quiz";
import {
	quizPopup
} from "./quiz-popup";






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
	productSlider();
	portfolioSlider();
	aboutSlider();
	quiz();
	quizPopup();




	$('img.border').wrap('<div class="border-images"></div>');
	$('.chess-img img').wrap('<div class="border-images"></div>');

	document.querySelectorAll('.chess-img img').forEach((item, index) => {
		if (index % 2 != 0) {
			item.parentNode.classList.add('image-rigth');
		} else {
			item.parentNode.classList.add('image-left');
		}
	});

	// $('textarea').on('input', function (e) {
	// 	this.style.height = '1px';
	// 	this.style.height = (this.scrollHeight + 6) + 'px';
	// });




	const galleryFilter = document.querySelectorAll('.work-gallery__item');
	let filterTv;
	let filterArr;
	galleryFilter.forEach(item => {
		filterTv = item.querySelectorAll('.galleryTvFilter');
		if (filterTv[0].innerText != '') {
			filterArr = filterTv[0].innerText.split('||');
			for (let i = 0; i < filterArr.length; i++) {
				item.classList.add(filterArr[i]);
			}
		}

	});

	const accordionTitle = document.querySelectorAll('.accordion__item');
	if (accordionTitle.length != 0) {
		accordionTitle[0].classList.add('active');
	}


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
		.on('click', '.product-cart__body .tabs__header li:not(.active)',
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

	const catalogFilter = document.querySelector('.catalog-page .filter_form');
	const filterOpen = document.querySelector('#shop_filter-button');
	const filterClose = document.querySelector('.filter__close');

	if (filterOpen) {
		filterOpen.onclick = function () {
			filterOpen.classList.add('hide');
			document.querySelector('body').classList.add('fix');
			document.querySelector('.overlay').classList.add('active');
			catalogFilter.classList.add('active');
		};
	}



	const closedFilter = function () {
		console.log('dkmi')
		filterOpen.classList.remove('hide');
		document.querySelector('body').classList.remove('fix');
		document.querySelector('.overlay').classList.remove('active');
		catalogFilter.classList.remove('active');
	};

	if (filterClose) {
		filterClose.onclick = closedFilter;
	}

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
		menuOpen();
	});

	$('.overlay').click(function () {
		menuClose();
		closedFilter();
	});


	$(".mobile__menu").swipe({
		swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
			if (direction == 'left') {
				menuClose();

			}
		}
	});
	$(".catalog-page .filter_form").swipe({
		swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
			if (direction == 'left') {
				closedFilter();

			}
		}
	});
	$(".overlay").swipe({
		swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
			if (direction == 'left') {
				menuClose();
				closedFilter();
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

	$(window).scroll(function () {
		if ($(this).scrollTop() > $(this).height()) {
			$('.up').addClass('active');
		} else {
			$('.up').removeClass('active');
		}
	});
	$('.up').click(function () {
		$('html,body').stop().animate({
			scrollTop: 0
		}, 'slow', 'swing');
	});

	const popupFormBody = document.querySelector('.popup-form');

	const closePopupForm = (e) => {
		document.querySelector('.popup-form').classList.remove('active');
		document.querySelector(".overlay").classList.remove('active');
		document.querySelector("body").classList.remove('fix');
		popupFormBody.querySelector('.item-title').textContent = '';
		popupFormBody.querySelector('.input-tilte').value = '';
	};
	const openPopupForm = (e) => {
		popupFormBody.querySelector('.item-title').textContent = e.target.dataset.title;
		popupFormBody.querySelector('.input-tilte').value = e.target.dataset.title;
		popupFormBody.classList.add('active');
		document.querySelector('body').classList.add('fix');
		document.querySelector('.overlay').classList.add('active');
	};


	document.addEventListener('click', (e) => {
		if (e.target.classList.contains('poup-form-call') ||
			e.target.parentNode.classList.contains('poup-form-call')) {
			openPopupForm(e);
		}
		if (e.target.classList.contains('popup-form__close') ||
			e.target.classList.contains('icon-close-popop-form') ||
			e.target.parentNode.classList.contains('popup-form__close') ||
			e.target.parentNode.classList.contains('icon-close-popop-form') ||
			e.target.classList.contains('popup-form')) {
			closePopupForm();
		}
	});

	window.onkeydown = function (event) {
		if (event.keyCode == 27 && popupFormBody.classList.contains('active')) {
			closePopupForm();
		}
	};
});