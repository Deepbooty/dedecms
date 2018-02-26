$(document).ready(function($) {
	$(".add-tab li").click(function() {
		$(".add-tab li").removeClass('active');
		$(this).addClass('active');
	});
	$("#hefei").click(function() {
		$(".map .imgbox").hide();
		$(".map .hefei").show();
	});
	$("#chongqing").click(function() {
		$(".map .imgbox").hide();
		$(".map .chongqing").show();
	});
});