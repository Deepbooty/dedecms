$(document).ready(function() {
	$(".choice-tab-item").click(function() {
		$(".choice-tab-item").removeClass('active');
		$(this).addClass('active');
		$(".choice-info-item").removeClass('active');
		$(".choice-info-item").eq($(this).index()).addClass('active');
	});
});
