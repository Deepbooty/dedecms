$(document).ready(function() {
  function scroll_fun() {
    var top = getScroll();
    var circletotop=$(".seedweet-circle").offset().top;
    var circletop=circletotop-$(window).height()+500;
    if (top>=circletop) {
      $(".seedweet-circle").addClass('active');
    }
  };
  scroll_fun();
  $(window).scroll(function(){
    scroll_fun();
  });
});