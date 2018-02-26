$(document).ready(function() {
	$(".rich-tab li").click(function() {
		$(".rich-tab li").removeClass('active');
		$(this).addClass('active');
		$(".rich-info").removeClass('active');
		$(".rich-info").eq($(this).index()).addClass('active');
	});
});