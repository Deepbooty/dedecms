
$(document).ready(function () {
    $(".tab-item").click(function(){
        var rel = $(this).attr("rel");
        $(".tab-item").removeClass("action");
        $(this).addClass("action");
        $(".unique-function").addClass("hide");
        $(".unique-function[rel = "+ rel +"]").removeClass("hide");
    });
});