$(document).ready(function() {
	$(".service-tab-item").click(function() {
		$(".service-tab-item").removeClass('active');
		$(this).addClass('active');
		$(".service-list").removeClass('active');
		$(".service-list").eq($(this).index()).addClass('active');
	});
});