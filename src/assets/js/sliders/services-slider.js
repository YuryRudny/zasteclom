import Swiper from 'swiper/bundle';

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