$(document).ready(function () {
	$(window).scroll(function() {
		var ww = $(window).scrollTop();

		if (ww > 100) {
			$('.header').addClass('fix');
		} else {
			$('.header').removeClass('fix');
		}
	});

	$('li.option').on('click', function() {
		var currentCate = this.dataset.filter;
		$(this).addClass('active').siblings().removeClass('active')
		$('.work-card').each(function() {
			var thisA = [this.dataset.cate.split(' ')]
			console.log(this.dataset.cate.split(' ').includes(currentCate))
			if(this.dataset.cate.split(' ').includes(currentCate)) {
				$(this).show()
			} else {
				$(this).hide()
			}
		})
	})
});