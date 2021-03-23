import Swiper from 'swiper/bundle';
import Cocoen from 'cocoen';

export function productPopup() {

	const body = document.querySelector('body');
	let productPopup;
	let galleryPopupThumbs;
	let galleryPopupTop;
	let galleryPersonal;
	let modalToggle = false;

	const opt = {
		loop: true,
		speed: 1200,
		slidesPerView: 1,
		effect: 'flip',
		grabCursor: true,
		spaceBetween: 0,
		autoHeight: true,
		observer: true,
		observeParents: true,
		slideToClickedSlide: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

	};

	const optPersonal = {
		loop: true,
		speed: 1200,
		slidesPerView: 1,
		grabCursor: true,
		spaceBetween: 25,
		autoHeight: true,
		observer: true,
		observeParents: true,
		slideToClickedSlide: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			1200: {
				slidesPerView: 2,
				spaceBetween: 25,
			},
			992: {
				slidesPerView: 1,
				spaceBetween: 25,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
			}
		}
	};

	body.addEventListener('click', e => {
		const target = e.target;
		if (target.closest('.has_popap')) {
			if (target.classList.contains('popapOpen') || target.classList.contains('product__overlay-box')) {
				e.preventDefault();
				openPopup(e);
			}
			if (target.classList.contains('product-cart__close') ||
				target.classList.contains('icon-close') ||
				target.classList.contains('product-cart') ||
				target.parentNode.classList.contains('icon-close')) {
				closePopup(e);
			}
		}
	});

	function openPopup(e) {
		const parent = e.target.closest('.has_popap');
		body.classList.add('fix-product');
		parent.querySelector('.product-cart').classList.add('active');
		parent.querySelector('.product-cart__body').classList.add('active');
		if (parent.classList.contains('product__cart')) {
			const slider = parent.querySelector('.swiper-container');
			productPopup = new Swiper(slider, opt);
			if (!parent.classList.contains('opening')) {
				if (parent.querySelector('.cocoen')) {
					new Cocoen(parent.querySelector('.cocoen'));
				}
			}
			parent.classList.add('opening');
		}
		if (parent.classList.contains('portfolio_cart')) {
			const galleryThumbs = parent.querySelector('.gallery-thumbs');
			const galleryTop = parent.querySelector('.gallery-top');
			const slider = parent.querySelector('.portfolio__personal .swiper-container');
			galleryPersonal = new Swiper(slider, optPersonal);
			galleryPopupThumbs = new Swiper(galleryThumbs, {
				spaceBetween: 10,
				slidesPerView: 4,
				freeMode: true,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				slideToClickedSlide: true,
				breakpoints: {
					1200: {
						slidesPerView: 4,
					}
				}
			});
			galleryPopupTop = new Swiper(galleryTop, {
				spaceBetween: 10,
				effect: 'flip',
				speed: 1200,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				thumbs: {
					swiper: galleryPopupThumbs
				},
				on: {
					slideChange: function () {
						let activeIndex = this.activeIndex + 1;
						let nextSlide = this.thumbs.swiper.$el[0].querySelector(`.swiper-slide:nth-child(${activeIndex + 1})`);
						let prevSlide = this.thumbs.swiper.$el[0].querySelector(`.swiper-slide:nth-child(${activeIndex - 1})`);

						if (nextSlide && !nextSlide.classList.contains('swiper-slide-visible')) {
							this.thumbs.swiper.slideNext();
						} else if (prevSlide && !prevSlide.classList.contains('swiper-slide-visible')) {
							this.thumbs.swiper.slidePrev();
						}
					}
				}
			});

		}
		modalToggle = true;

	}

	function closePopup(e) {
		const parent = e.target.closest('.has_popap');
		const popupCollection = document.querySelectorAll('.product-cart');
		const popupBodyCollection = document.querySelectorAll('.product-cart__body');
		body.classList.remove('fix-product');
		popupCollection.forEach(item => {
			item.classList.remove('active');
		});
		popupBodyCollection.forEach(item => {
			item.classList.remove('active');
		});
		if (parent.classList.contains('product__cart')) {
			productPopup.destroy(true, true);
		}
		if (parent.classList.contains('portfolio_cart')) {
			galleryPopupThumbs.destroy(true, true);
			galleryPopupTop.destroy(true, true);
			galleryPersonal.destroy(true, true);
		}
		modalToggle = false;
	}


	window.onkeydown = function (event) {
		if (event.keyCode == 27 && modalToggle) {
			closePopup();
		}
	};

}