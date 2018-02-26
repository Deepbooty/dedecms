$(document).ready(function() {
	$(".o2o-case-tab-item").click(function() {
		$(".o2o-case-tab a").removeClass('active');
		$(this).find('a').addClass('active');
		$(".o2o-case-info").removeClass('active');
		$(".o2o-case-info").eq($(this).index()).addClass('active');
	});
});