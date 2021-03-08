import Swiper from 'swiper/bundle';
import Cocoen from 'cocoen';

export function mainSlider() {
	const topSlider = new Swiper('.main-slider .swiper-container', {
		loop: true,
		speed: 1200,
		effect: 'fade',
		dots: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		// autoplay: {
		// 	delay: 7000,
		// },
		disableOnInteraction: false
	});
}
export function servicesSlider() {
	const servicesSlider = new Swiper('.services-slider .swiper-container', {
		loop: true,
		speed: 1200,
		slidesPerView: 'auto',
		centeredSlides: true,
		grabCursor: true,
		// autoplay: {
		// 	delay: 3000,
		// },
		disableOnInteraction: false,
		slideToClickedSlide: true,
	});
}

export function usedMaterial() {
	const arrowNext = document.querySelector('.used-material .slider-button-next');
	const arrowPrev = document.querySelector('.used-material .slider-button-prev');
	const usedMaterial = new Swiper('.used-material .swiper-container', {
		loop: true,
		speed: 1200,
		slidesPerView: 1,
		grabCursor: true,
		slideToClickedSlide: true,
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			1020: {
				slidesPerView: 3,
			}
		}
	});
	if (arrowNext) {
		arrowNext.addEventListener('click', () => {
			usedMaterial.slideNext();
		});
	}
	if (arrowPrev) {
		arrowPrev.addEventListener('click', () => {
			usedMaterial.slidePrev();
		});
	}
}

export function principles() {
	const arrowNext = document.querySelector('.principles .slider-button-next');
	const arrowPrev = document.querySelector('.principles .slider-button-prev');
	const principles = new Swiper('.principles .swiper-container', {
		loop: true,
		speed: 1200,
		direction: 'vertical',
		slidesPerView: 2,
		grabCursor: true,
		slideToClickedSlide: true,
		spaceBetween: 44,
		// autoplay: {
		// 	delay: 3000,
		// },
		// autoplay: {
		// 	delay: 3000,
		// },
		disableOnInteraction: false,
		breakpoints: {
			480: {
				slidesPerView: 3,
			}
		}
	});

	if (arrowNext) {
		arrowNext.addEventListener('click', () => {
			principles.slideNext();
		});
	}
	if (arrowPrev) {
		arrowPrev.addEventListener('click', () => {
			principles.slidePrev();
		});
	}
}

export function recomendation() {
	const arrowNext = document.querySelector('.recomendation .slider-button-next');
	const arrowPrev = document.querySelector('.recomendation .slider-button-prev');
	const recomendation = new Swiper('.recomendation .swiper-container', {
		loop: true,
		speed: 1200,
		slidesPerView: 1,
		grabCursor: true,
		slideToClickedSlide: true,
		breakpoints: {
			480: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			1020: {
				slidesPerView: 4,
			}
		}
	});
	if (arrowNext) {
		arrowNext.addEventListener('click', () => {
			recomendation.slideNext();
		});
	}
	if (arrowPrev) {
		arrowPrev.addEventListener('click', () => {
			recomendation.slidePrev();
		});
	}
}

export function sertificate() {
	const arrowNext = document.querySelector('.sertificate-slider .slider-button-next');
	const arrowPrev = document.querySelector('.sertificate-slider .slider-button-prev');
	const sertificateSlider = new Swiper('.sertificate-slider .swiper-container', {
		loop: true,
		speed: 800,
		slidesPerView: 3,
		centeredSlides: true,
		grabCursor: true,
	});
	if (arrowNext) {
		arrowNext.addEventListener('click', () => {
			sertificateSlider.slideNext();
		});
	}
	if (arrowPrev) {
		arrowPrev.addEventListener('click', () => {
			sertificateSlider.slidePrev();
		});
	}
}
export function news() {
	const arrowNext = document.querySelector('.news-slider .slider-button-next');
	const arrowPrev = document.querySelector('.news-slider .slider-button-prev');
	const newsSlider = new Swiper('.news-slider .swiper-container', {
		loop: true,
		speed: 1200,
		slidesPerView: 1,
		grabCursor: true,
		spaceBetween: 30,
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			1020: {
				slidesPerView: 3,
			}
		}
	});
	if (arrowNext) {
		arrowNext.addEventListener('click', () => {
			newsSlider.slideNext();
		});
	}
	if (arrowPrev) {
		arrowPrev.addEventListener('click', () => {
			newsSlider.slidePrev();
		});
	}
}

export function partners() {
	const arrowNext = document.querySelector('.partners .slider-button-next');
	const arrowPrev = document.querySelector('.partners .slider-button-prev');
	const partners = new Swiper('.partners .swiper-container', {
		loop: true,
		speed: 1200,
		slidesPerView: 1,
		grabCursor: true,
		slideToClickedSlide: true,
		breakpoints: {
			480: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			1020: {
				slidesPerView: 4,
			}
		}
	});

	if (arrowNext) {
		arrowNext.addEventListener('click', () => {
			partners.slideNext();
		});
	}
	if (arrowPrev) {
		arrowPrev.addEventListener('click', () => {
			partners.slidePrev();
		});
	}
}

export function semiSlider() {
	const arrowNext = document.querySelector('.semi-slider .slider-button-next');
	const arrowPrev = document.querySelector('.semi-slider .slider-button-prev');
	const semiSlider = new Swiper('.semi-slider .swiper-container', {
		loop: true,
		speed: 1200,
		slidesPerView: 1,
		grabCursor: true,
		spaceBetween: 30,
		autoHeight: true,
		slideToClickedSlide: true,
	});

	if (arrowNext) {
		arrowNext.addEventListener('click', () => {
			semiSlider.slideNext();
		});
	}
	if (arrowPrev) {
		arrowPrev.addEventListener('click', () => {
			semiSlider.slidePrev();
		});
	}
}

export function productPopup() {

	let productPopup;

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

	const body = document.querySelector('body');

	let modalToggle = false;

	body.addEventListener('click', e => {
		const popupCollection = document.querySelectorAll('.product-popup');
		const popupBodyCollection = document.querySelectorAll('.product-popup__body');
		const target = e.target;
		if (target.closest('.product__cart')) {

			const parent = target.closest('.product__cart');
			const slider = parent.querySelector('.swiper-container');


			const openPopup = function () {
				body.classList.add('fix');
				parent.querySelector('.product-popup').classList.add('active');
				parent.querySelector('.product-popup__body').classList.add('active');
				productPopup = new Swiper(slider, opt);
				modalToggle = true;
				if (!parent.classList.contains('opening')) {
					new Cocoen(parent.querySelector('.cocoen'));
				}
				parent.classList.add('opening');
			};

			if (target.classList.contains('productVastView')) {
				openPopup();
			}
			if (target.classList.contains('product-popup__close') ||
				target.classList.contains('icon-close') ||
				target.classList.contains('product-popup') ||
				target.parentNode.classList.contains('icon-close')) {
				closePopup();
			}
		}
	});

	function closePopup() {
		const popupCollection = document.querySelectorAll('.product-popup');
		const popupBodyCollection = document.querySelectorAll('.product-popup__body');
		body.classList.remove('fix');
		popupCollection.forEach(item => {
			item.classList.remove('active');
		});
		popupBodyCollection.forEach(item => {
			item.classList.remove('active');
		});
		productPopup.destroy(true, true);
		modalToggle = false;
	}


	window.onkeydown = function (event) {
		if (event.keyCode == 27 && modalToggle) {
			closePopup();
		}
	};
}