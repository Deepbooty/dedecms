$(document).ready(function($) {
    $(".advantage-list li").click(function() {
        $(this).find('.advantage-info').stop().slideToggle();
        $(this).find('.iconfont').toggleClass('hide');
    });
});