$(document).ready(function() {
	$(".open-item").click(function() {
		$(".open-list li").removeClass('active');
		$(this).parent().addClass('active');
	});
	$(".wait-tab-item").click(function() {
		$(".wait-tab-item").removeClass('active');
		$(this).addClass('active');
		$(".wait-info-item").removeClass('active');
		$(".wait-info-item").eq($(this).index()).addClass('active');
	});
});