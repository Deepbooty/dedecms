$(document).ready(function($) {
    $(".core-list li").click(function() {
        $(this).find('.core-info').stop().slideToggle();
        $(this).find('.iconfont').toggleClass('hide');
    });
});