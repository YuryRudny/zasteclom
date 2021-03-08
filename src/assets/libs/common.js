$('.work-gallery').imagesLoaded(function () {
	function sortableMasonry() {
		if ($('.sortable-masonry').length) {

			var winDow = $(window);
			// Needed variables
			var $container = $('.sortable-masonry .items-container');
			var $filter = $('.filter-btns');

			$container.isotope({
				filter: '*',
				masonry: {
					columnWidth: '.filter_item'
				},
				animationOptions: {
					duration: 500,
					easing: 'linear'
				}
			});


			// Isotope Filter 
			$filter.find('li').on('click', function () {
				var selector = $(this).attr('data-filter');

				try {
					$container.isotope({
						filter: selector,
						animationOptions: {
							duration: 500,
							easing: 'linear',
							queue: false
						}
					});
				} catch (err) {

				}
				return false;
			});


			winDow.bind('resize', function () {
				var selector = $filter.find('li.active').attr('data-filter');

				$container.isotope({
					filter: selector,
					animationOptions: {
						duration: 500,
						easing: 'linear',
						queue: false
					}
				});
			});


			var filterItemA = $('.filter-btns li');

			filterItemA.on('click', function () {
				var $this = $(this);
				if (!$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});
		}
	}

	sortableMasonry();


});

$('.gallery-section').imagesLoaded(function () {
	if ($('#master-gallery-slider').length) {

		var slider = new MasterSlider();

		slider.control('arrows', {
			autohide: false
		});
		slider.setup('master-gallery-slider', {
			width: 570,
			space: 120,
			autoHeight: true,
			smoothHeight: true,
			wheel: false,
			loop: true,
			speed: 30,
			view: 'flow',
			layout: 'partialview',
			swipe: true,
			instantStartLayers: true,
			autoplay: true

		});
	}
});

var show = true;
var countbox = $(".statistic");
$(window).on("scroll load resize", function () {
	if (!show) {
		return false;
	}
	var w_top = $(window).scrollTop();
	try {
		var e_top = $(countbox).offset().top;

	} catch (error) {
		console.log(error)
	}
	var w_height = $(window).height();
	var d_height = $(document).height();
	var e_height = $(countbox).outerHeight();
	if (w_top + 1200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
		$('.statistic__digit').spincrement({
			thousandSeparator: "",
			duration: 2000
		});
		show = false;
	}


});