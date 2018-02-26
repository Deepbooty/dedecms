/**
 * Created by Administrator on 2017/1/9 0009.
 */

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

    $(".z-hover").hover(function () {
        $(this).children(".sub-title").addClass("hover");
    },function(){
        $(this).children(".sub-title").removeClass("hover");
    });

    $(".section4 .sec4_box li").hover(function () {
        $(this).addClass("hover");
    },function () {
        $(this).removeClass("hover");
    });

    $(".secBOX li").hover(function () {
        $(this).addClass("hover");
    },function () {
        $(this).removeClass("hover");
    });

    $(".fain-hover li").mouseover(function(){
        $(this).addClass("unique-hover");
    });

    $(".fain-hover li").mouseleave(function(){
        $(this).removeClass("unique-hover");
    });

    $(".section9 .ourVanture li").click(function () {
        var _index=$(this).index();
        $(this).addClass("active").siblings("li").removeClass("active");
        $(".vanBox").eq(_index).show().siblings(".vanBox").hide();
    });

    $(".section7 .successCase li .caseImg").hover(function () {
        $(this).addClass("add_hover");
    },function () {
        $(this).removeClass("add_hover");
    });
    jQuery("#slideBox2").slide({mainCell:"#bd2 ul",effect:"left",trigger:"click",easing:"",delayTime:500,pnLoop:true,prevCell:"#prev2",nextCell:"#next2"});
    jQuery("#m-picture-list").slide({mainCell:".m-picture-list ul",effect:"leftLoop",trigger:"click",delayTime:300,prevCell:"#prev",nextCell:"#next"});

    var imglight = new Swiper ('.img-light', {
        width:980,
        height: 700,
        spaceBetween : 10
    });

    $('.swiper-button-prev').click(function(){
        imglight.swipePrev();
    });
    $('.swiper-button-next').click(function(){
        imglight.swipeNext();
    });

    $(".j-open-popup").click(function(){
        $(".popup").removeClass("hide");
        $("body").addClass("no-scroll");
        $(".zb-head").addClass("zb-head-leave");
        var srclist = $(this).attr("data").split("-");
        var rel = $(this).attr("rel");
        for (var i = 0; i < srclist.length; i++) {
            // console.log(srclist[i]);
            if(rel == "erwei"){
                imglight.appendSlide('<div class="swiper-slide swiper-no-swiping"><img src="'+ srclist[i] +'" class="erweima"></div>');
            }else if(rel == "single"){
                imglight.appendSlide('<div class="swiper-slide swiper-no-swiping"><img src="'+ srclist[i] +'" class="single"></div>');
            }else if(rel == "wangye"){
                imglight.appendSlide('<div class="swiper-slide"><img src="'+ srclist[i] +'" width="100%"></div>');
            }
        }
    });

    $(".j-img-light-close").click(function(){
        $(".popup").addClass("hide");
        $("body").removeClass("no-scroll");
        imglight.removeAllSlides();
    });

    $(".m-function-block").hover(function () {
        $(this).siblings(".m-function-block ").children(".function-bar").removeClass("active");
        $(this).children(".function-bar").addClass("active");
    });

});