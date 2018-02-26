$(document).ready(function($) {
    TouchSlide({slideCell:"#banner",mainCell:".banner-list ul",interTime:5000,delayTime:500,effect:"leftLoop",autoPlay:true})
    $(".success-nav li").click(function() {
        $(".success-nav li").removeClass('active');
        $(this).addClass('active');
    });
    $(".success-nav #nav-all").click(function() {
        $(".success-list li").show();
    });
    $(".success-nav #nav-o2o").click(function() {
        $(".success-list li").hide();
        $(".success-list .type-o2o").show();
    });
    $(".success-nav #nav-inter").click(function() {
        $(".success-list li").hide();
        $(".success-list .type-inter").show();
    });
    $(".success-nav #nav-market").click(function() {
        $(".success-list li").hide();
        $(".success-list .type-market").show();
    });
});