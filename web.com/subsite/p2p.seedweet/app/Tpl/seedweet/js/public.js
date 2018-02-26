
$(document).ready(function(){

  data_choose();
  //topset();
  setTimeout("aqln_hover()","800");
  aqln_leave();
    iesidebar();
    pc1();
    ly1();
/*   if ($.browser.msie && ($.browser.version == "7.0")) {
            $(".header").css("position", "relative");
            $("body").css("padding-top", "0");

        }
     else   if ($.browser.msie && ($.browser.version == "6.0")) {
            $(".header").css("position", "relative");
            $("body").css("padding-top", "0");
        }
      else{
        $(window).scroll(function(){
            var top = getScroll();
            if (top >=127) {
             $(".topnav").animate({'height':0},100);
             $(".header").animate({'height':'76px'},100);
            $(".menu").addClass("menu-fixed");
             
            }else{
              $(".topnav").animate({'height':'30px'},100);
              $(".menu").removeClass("menu-fixed");
             $(".header").animate({'height':'127px'},100);
            };
          });
      };*/
    $(window).scroll(function(){
      $.reset_nav();
        var top = getScroll();
        if(top >=200){
             setTimeout("ly5()","300"); 
        }
        if(top >=400){
           setTimeout("pc17()","300");

        }
        if(top >=600){
          setTimeout("pc156()","300");
        }
        if(top >=800){
          setTimeout("ly4()","300");
          setTimeout("pc19()","300");
        }
         if(top >=1000){
            setTimeout("ly7()","300"); 
        }
        if(top >=1500){
             setTimeout("ly_lost()","100");
        }
        if(top >=1800){
             setTimeout("ly9()","300");
        }
        if(top >=300){
            $(".addfix").addClass("tit_intop");
        }
        if(top <=300){
           $(".addfix").removeClass("tit_intop");
        }
    });
   //console.log(" If you would go up high, then use your own legs ! Do not let yourselves carried aloft; do not seat yourselves on other people's backs and heads. (F. W. Nietzsche, German Philosopher) \n please call me zheng shi san\n");


});





var p1=".un-pc1";
var p2=".un-pc2";
var p3=".un-pc3";
var p4=".un-pc4";
window.setInterval(function(){yd(p1);}, 2300); 
window.setInterval(function(){yd(p2);}, 1800); 
window.setInterval(function(){yd(p3);}, 1500); 
window.setInterval(function(){yd(p4);}, 2000); 
var zc1=".zc1";
var zc2=".zc2";
window.setInterval(function(){zc(zc1);}, 2300); 
window.setInterval(function(){zc(zc2);}, 2000); 
var zc3=".zc3";
var zc4=".zc4";
window.setInterval(function(){zcnext(zc3);}, 2300); 
window.setInterval(function(){zcnext(zc4);}, 2300); 
var pc81=".pc81"
var pc82=".pc82"
var Speed=rd(1000,1500)
window.setInterval(function(){ydl(pc81);},1500); 
window.setInterval(function(){ydr(pc82);},1500); 
/* JS获取n至m随机整数*/
function rd(n,m){
    var c = m-n+1;  
    return Math.floor(Math.random() * c + n);
}
//循环动画
function yd(e){
var s=1000;
var p=1666;
var sp=rd(s,p);
$(e).animate({'bottom':'1033px','opacity':'1'},sp,function(){
  $(e).animate({'bottom':'1133px','opacity':'0'},300);
});
}
function zc(e){
var s=1000;
var p=2000;
var sp=rd(s,p);
$(e).animate({'bottom':'950px','opacity':'1'},sp,function(){
  $(e).css("opacity", "0");
  $(e).css("bottom", "1133px");
});
}
function zcnext(e){
var s=1000;
var p=2000;
var sp=rd(s,p);
$(e).animate({'bottom':'750px','opacity':'1'},sp,function(){
  $(e).css("bottom", "940px");
});
}
function ydl(e){
var s=1000;
var p=1500;
var sp=rd(s,p);
$(e).animate({'left':'150px','opacity':'1'},sp,function(){
  $(e).css("opacity", "0");
  $(e).css("left", "235px");
});
}
function ydr(e){
var s=1000;
var p=1500;
var sp=rd(s,p);
$(e).animate({'left':'235px','opacity':'1'},sp,function(){
  $(e).css("opacity", "0");
  $(e).css("left", "150px");
});
}
  //开始自定定位nav的当前位置  
  $.reset_nav = function(){
    var content_boxes = $(".id_class");
    $(".tit_bloke").removeClass("active");
    content_idx = -1;
    for(i=0;i<content_boxes.length;i++)
    {
      var scrollTop = $(document).scrollTop() +75; 
      var current_top = $(content_boxes[i]).offset().top;//内容盒子高度偏移，预留菜单高度
      var next_top = current_top + 50000;  //下一个高度
      if(i<content_boxes.length-1)
      next_top = $(content_boxes[i+1]).offset().top;  
      if(scrollTop>=current_top&&scrollTop<next_top)
      {
        var rel_id = $(content_boxes[i]).attr("rel"); 
        content_idx = rel_id;
        break;
      }      
    }
     $(".tit_bloke").removeClass("choose");
    $(".tit_bloke[rel='"+content_idx+"']").addClass("choose");  
  }


/*服务器安全页面选择*/
$.refresh_choose = function(i){
            $(".tit_bloke").removeClass("choose");
            $(".tit_bloke[rel='"+i+"']").addClass("choose");
            var navheight = $(".id_class[rel='"+i+"']").offset().top;
             window.scrollTo(0,navheight);
          };
function data_choose(){
    $(".tit_bloke").bind("click",function(){
        $(".addfix").addClass("tit_intop");
              var idx = $(this).attr("rel");           
              $.refresh_choose(idx); 
            });
}


/*鼠标上移显示*/

function aqln_hover(){
    $(".aqln_menu").mouseover(function(){
      $(".aqln_menu").oneTime(50,function(){  
          $(".nav2menu").slideDown(100);
      });
      
  });
}
function aqln_leave(){
    $(".aqln_menu").mouseleave(function(){
      $(".aqln_menu").stopTime(); 
      $(".nav2menu").slideUp(100);
  });
}


/*滚动条在IE下隐藏*/
function iesidebar(){
   if ($.browser.msie && ($.browser.version == "7.0")) {
            $(".topcontent").css("display", "none");
            $(".topscroll").css("display", "none");
            $(".header").css("position", "relative");
            $("body").css("padding-top", "0");

        }
     else   if ($.browser.msie && ($.browser.version == "6.0")) {
            $(".topcontent").css("display", "none");
             $(".topscroll").css("display", "none");
        }
else   if ($.browser.msie && ($.browser.version == "8.0")) {
            $(".topcontent").css("display", "none");
             $(".topscroll").css("display", "none");
        }
}

/*获取滚动的高度*/
 function getScroll(){  
     var bodyTop = 0;    
     if (typeof window.pageYOffset != 'undefined') {    
         bodyTop = window.pageYOffset;    
     } else if (typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') {    
         bodyTop = document.documentElement.scrollTop;    
     }    
     else if (typeof document.body != 'undefined') {    
         bodyTop = document.body.scrollTop;    
     }    
     return bodyTop  
}  

/*头部导航的移动效果*/
function setSlip(){

    $("#setSlip").lavaLamp({
        fx: "backout", 
        speed: 700,
        click: function(event, menuItem) {
            return true;
        }
    });
}

/*top的定位220*/
/*function topset(){
	scrolltotop.offset(0,116);
	scrolltotop.init(); 
}*/



/*资金安全理念动画*/




function pc1(){
    $(".pc1").fadeIn(500);
    $(".pc2").fadeIn(500);
    $(".pc3").fadeIn(500);
    $(".pc4").fadeIn(500);
    $(".pc5").fadeIn(500);
    $(".pc6").fadeIn(500);
    $(".pc7").fadeIn(500);
    $(".pc8").fadeIn(500);
    $(".pc9").fadeIn(500);
    $(".pc10").fadeIn(500);
    $(".pc11").fadeIn(500);
    $(".pc12").fadeIn(500);
    $(".pc13").fadeIn(500);
    $(".pc14").fadeIn(500);
    
}

function pc156(){
    $(".pc15").animate({'left':250,'opacity':1},800);
    $(".pc16").animate({'left':743,'opacity':1},800);
}

function pc17(){
    $(".pc17").fadeIn(500);
    setTimeout("pc18()","300");
}

function pc18(){
    $(".pc18").slideDown(1000);
    setTimeout("pc181()","1300");
}
function pc181(){
    $(".pc181").fadeIn(800);
    
}
function pc19(){
    $(".pc19").slideDown(500);
    setTimeout("pc20()","300");
}
function pc20(){
    $(".pc20").slideDown(500);
}

/*点击出现某个轮播*/

function baidu_show(){
    $(".show_button").bind('click',function(){
        var top1=$(this).parents(".show").attr("topval");
        $(".baidu_show").animate({'top':top1});
        //$(".baidu_show").css({'top':top1});
        $(".baidu_show").slideDown("fast"); 
        var title=$(this).parents(".showtxt").attr("tit");
        $(".tab_txt h1").text(title);

    });
    //点击隐藏
    $(".close_show").bind('click',function(){
    $(".baidu_show").slideUp("fast");    
    });
}

/*字体出现隐藏
function ss_baidu_hover(){
    $(".ss_baidu").hover(fontshow(),fonthide());
}
function fontshow(){
    setTimeout(function(){$(".ss_baidu span").css("display","block");},"3000");
}
function fonthide(){
    setTimeout(function(){$(".ss_baidu span").css("display","none");},"3000");  
}
*/

/*产品展示动画*/

function ly1(){
    $(".ly1").animate({
    top:'20px',
    opacity:'1'
  },2000);
  setTimeout("ly2()","500");  
}

function ly2(){
    $(".ly2").animate({
    top:'77px',
    opacity:'1'
  },2000);
    setTimeout("ly3()","888");  
}
function ly3(){
    $(".ly3").animate({
    top:'240px',
    opacity:'1'
  },3000);
}

function ly4(){
    $(".ly4").animate({
    width: '93px',
    height:'109px',
    left:'135px',
    top:'205px',
    opacity:'1'
  },1000);
}


function ly5(){
    $(".ly5").animate({
    top:'200px',
    opacity:'1'
  },3000);
     setTimeout("ly6()","1000"); 
}

function ly6(){
    $(".ly6").animate({
    opacity:'1'
  },1000);
}
function ly7(){
    $(".ly7").animate({
    opacity:'1'
  },1000);
   setTimeout("ly8()","300");  
}

function ly8(){
    $(".ly8").animate({
    right:'314px',
    top:'189px',
    opacity:'1'
  },4000);
}

function ly9(){
    $(".ly9").animate({
    right:'175px',
    top:'113px',
    opacity:'1'
  },2500);
   setTimeout("ly10()","500");  
}

function ly10(){
    $(".ly10").animate({
    right:'280px',
    top:'70px',
    opacity:'1'
  },3000);
    setTimeout("ly11()","1000");   
}

function ly11(){
    $(".ly11").animate({
    right:'135px',
    top:'10px',
    opacity:'1'
  },3000);
}

function ly_lost(){
    $(".ly_lost").animate({
    opacity:'1'
  },2000);
}