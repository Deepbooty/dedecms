$(document).ready(function(){
    $(".demand-list li").hover(function() {
        $(this).addClass('active');
    }, function() {
        $(this).removeClass('active');
    });
    $(".demand-btn").click(function(){
        $(".demand-info").eq($(this).parents(".demand-list li").attr('data')).addClass('active');
    });
    $(".demand-info-close").click(function() {
        $(".demand-info").removeClass('active');
    });
});