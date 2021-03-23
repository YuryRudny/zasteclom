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
export function aboutSlider() {
	const arrowNext = document.querySelector('.about-slider .slider-button-next');
	const arrowPrev = document.querySelector('.about-slider .slider-button-prev');
	const newsSlider = new Swiper('.about-slider .swiper-container', {
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
export function productSlider() {
	const partners = new Swiper('.product__page .swiper-container', {
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
	});
	const cocoen = document.querySelector('.product__page .cocoen');
	if (cocoen) {
		new Cocoen(cocoen);
	}
}
export function portfolioSlider() {

	const galleryThumbs = new Swiper('.portfolio-inner-page .gallery-thumbs', {
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
	const galleryTop = new Swiper('.portfolio-inner-page .gallery-top', {
		spaceBetween: 10,
		effect: 'flip',
		speed: 1200,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		thumbs: {
			swiper: galleryThumbs
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
	const galleryPersonal = new Swiper('.portfolio-inner-page .portfolio__personal .swiper-container', {
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
	});


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