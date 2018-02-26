$(document).ready(function(){

	$(window).scroll(function(){
		var top = getScroll();
		if(top>=80){
			$(".zb-head").addClass("zb-head-leave");
		}
		else{
			$(".zb-head").removeClass("zb-head-leave");
		}
	});

	$(".fain-hover li").mouseover(function(){
		$(this).addClass("unique-hover");
	});

	$(".fain-hover li").mouseleave(function(){
		$(this).removeClass("unique-hover");
	});



	var eq=0;
	var serInter=setInterval(function () {
		$(".function-banner .slide_page").eq(eq).siblings(".slide_page").hide();
		$(".function-banner .slide_page").eq(eq).fadeIn();
		$(".pagination span").eq(eq).addClass("active").siblings("span").removeClass("active");
		eq++;
		if(eq>2){
			eq=0
		};
	},2500);

	$(".pagination span").hover(function () {
		clearInterval(serInter);
		var _innum=$(this).index();
		$(this).addClass("active").siblings("span").removeClass("active");
		$(".function-banner .slide_page").eq(_innum).siblings(".slide_page").hide();
		$(".function-banner .slide_page").eq(_innum).fadeIn()
	});
});