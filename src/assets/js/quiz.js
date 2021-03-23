import Swiper from 'swiper/bundle';
import Cocoen from 'cocoen';

export function quiz() {
	const QUIZ = document.querySelector('.quiz--pages');
	if (QUIZ) {
		const quizSlider = new Swiper('.quiz--pages .quiz-form .swiper-container', {
			loop: false,
			speed: 500,
			effect: 'fade',
			allowTouchMove: false,
			autoHeight: true
		});

		const quizTitle = document.querySelector('.quiz--pages .quiz__current-title');
		const quizCurrent = document.querySelector('.quiz--pages .quiz__current');
		const quizTotal = document.querySelector('.quiz--pages .quiz__total');
		const quizQuestion = document.querySelectorAll('.quiz--pages .quiz__step');
		const stepNext = document.querySelector('.quiz--pages .quiz--next');
		const stepPrev = document.querySelector('.quiz--pages .quiz--prev');
		const quizSubmit = document.querySelector('.quiz--pages .quiz--submit');
		let quizTitleText = document.querySelector('.quiz--pages .quiz__title-arr').textContent;
		quizTitleText = quizTitleText.split('||');

		let quizStep = 0;

		quizTotal.textContent = quizQuestion.length;

		const showStep = function (step) {
			quizTitle.textContent = quizTitleText[quizStep];
			switch (step) {
				case 0:
					stepPrev.classList.add('hidden');
					break;
				case 6:
					quizSubmit.classList.remove('hidden');
					stepNext.classList.add('hidden');
					break;
				default:
					stepNext.classList.remove('hidden');
					quizSubmit.classList.add('hidden');
					stepPrev.classList.remove('hidden');
			}
			quizCurrent.textContent = step + 1;

		};

		const quizNext = function (step) {

			const thisStep = quizQuestion[step - 1];
			let quizInputChecked = thisStep.querySelectorAll('input.default-field');
			let quizInputText = thisStep.querySelectorAll('input[type="text"]');

			quizInputChecked = Array.from(quizInputChecked);
			quizInputText = Array.from(quizInputText);

			function isChecked(item) {
				return item.checked;
			}

			function isFilled(item) {
				return item.value != '';
			}

			const validStep = function () {
				quizSlider.slideNext();
				showStep(step);
			};

			const invalidStep = function () {
				quizStep--;
				thisStep.classList.add('invalid__step');

				if (thisStep.classList.contains('quiz__step--images')) {

					const elem = thisStep.querySelectorAll('.custom__input');

					const thisAnimate = function (timeout) {
						elem.forEach((item, index) => {
							setTimeout(() => {
								item.classList.add('active');
							}, index * timeout);
						});
						setTimeout(() => {
							elem.forEach((item, index) => {
								setTimeout(() => {
									item.classList.remove('active');
								}, index * timeout);
							});
						}, 300);

					};
					thisAnimate(150);
					setTimeout(() => {
						thisStep.classList.remove('invalid__step');
					}, 1000);
				}
				if (thisStep.classList.contains('quiz__step--checkboxes')) {
					thisStep.classList.add('invalid-checkboxes');
					const elem = thisStep.querySelectorAll('input');
					elem.forEach(item => {
						item.addEventListener('input', () => {
							thisStep.classList.remove('invalid-checkboxes');
						});
					});
					setTimeout(() => {
						thisStep.classList.remove('invalid__step');
					}, 1000);
				}


			};


			if (quizInputText.length > 0) {

				if (quizInputText.some(isFilled) || quizInputChecked.some(isChecked)) {
					validStep(step);
				} else {
					invalidStep();
				}

			} else {
				if (quizInputChecked.some(isChecked)) {
					validStep(step);
				} else {
					invalidStep();
				}
			}
		};

		if (stepNext) {
			stepNext.addEventListener('click', () => {

				quizStep++;
				quizNext(quizStep);
			});
		}

		const quizPrev = function (step) {
			quizQuestion[step + 1].classList.remove('active');
			showStep(step);
		};

		if (stepPrev) {
			stepPrev.addEventListener('click', () => {
				quizSlider.slidePrev();
				quizStep--;
				quizPrev(quizStep);
			});
		}
		showStep(quizStep);

		const closeQuizSuccess = (e) => {
			e.target.closest('.s-quiz__content').classList.remove('active');
			e.target.closest('.popup-success').classList.remove('active');

		};

		document.addEventListener('click', (e) => {

			if (e.target.classList.contains('popup-success__close--quiz') ||
				e.target.classList.contains('icon-close-quiz-success') ||
				e.target.parentNode.classList.contains('popup-success__close--quiz') ||
				e.target.parentNode.classList.contains('icon-close-quiz-success') ||
				e.target.classList.contains('popup-success')) {
				closeQuizSuccess(e);
				showStep(0);
				quizSlider.slideTo(0);
			}
		});

	}

}