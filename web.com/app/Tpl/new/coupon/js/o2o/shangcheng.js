$(document).ready(function() {
	$(".apply-tab-item").click(function() {
		$(".apply-tab-item").removeClass('active');
		$(this).addClass('active');
		$(".apply-info-item").removeClass('active');
		$(".apply-info-item").eq($(this).index()).addClass('active');
	});
});