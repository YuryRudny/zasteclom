import Swiper from 'swiper/bundle';

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