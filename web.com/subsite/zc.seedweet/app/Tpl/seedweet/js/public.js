
$(document).ready(function(){

    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $(".lavaLampBottomStyle li").css("margin", "0px 10px");
        
    }else{
    }
      $(".ewm").addClass("v");
    $(".ewm").bind('click',function(){
      if ($(".ewm").hasClass("v")) {
        $(".ewmimg").fadeIn(); 
        $(".ewm").removeClass("v");
      }
      else{
        $(".ewmimg").fadeOut(); 
        $(".ewm").addClass("v");
      }; 
    });
  data_choose();
  //topset();
  setTimeout("aqln_hover()","800");
  aqln_leave();
    baidu_show();
    iesidebar();
    pc1();
    pc5();
    ly1();
    $(window).scroll(function(){
      $.reset_nav();
        var top = getScroll();
        if(top >=200){
            setTimeout("pc6()","300");
            setTimeout("ly4()","300");
        }
        if(top >=800){

        }
         if(top >=1000){
        }
        if(top >=1500){
        }
        if(top >=1800){
        }
        if(top >=300){
            $(".addfix").addClass("tit_intop");
        }
        if(top <=300){
           $(".addfix").removeClass("tit_intop");
        }
    });
   
     


});
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
function topset(){
	scrolltotop.offset(0,350);
	scrolltotop.init(); 
}



/*资金安全理念动画*/
function pc1(){
    $(".pc1").fadeIn(500);
    setTimeout("pc2()","400");
}
function pc2(){
    $(".pc2").fadeIn(500);
    setTimeout("pc3()","400");
}
function pc3(){
    $(".pc3").fadeIn(500);
    
}
function pc5(){
    $(".pc5").fadeIn(500);
    
}
function pc6(){
    $(".pc6").slideDown(500);
    setTimeout("pc7()","300");
}
function pc7(){
    $(".pc7").fadeIn(500);
    setTimeout("pc8()","300");
}
function pc8(){
    $(".pc8").slideDown(500);
    setTimeout("pc9()","300");
}
function pc9(){
    $(".pc9").fadeIn(500);
    setTimeout("pc10()","300");
}
function pc10(){
    $(".pc10").fadeIn(500);
    setTimeout("pc11()","300");
}
function pc11(){
    $(".pc11").fadeIn(500);
    $(".pc12").fadeIn(500);
    setTimeout("pc13()","300");
}
function pc13(){
    $(".pc13").fadeIn(500);
    $(".pc14").fadeIn(500);
    setTimeout("pc15()","50");
}
function pc15(){
    $(".pc15").fadeIn(500);
    setTimeout("pc16()","300");
}
function pc16(){
    $(".pc16").fadeIn(500);
    $(".pc17").fadeIn(500);
    setTimeout("pc18()","300");
}
function pc18(){
    $(".pc18").slideDown(1000);
    setTimeout("pc19()","300");
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
    top:'30px',
    opacity:'1'
  },2000);
  setTimeout("ly2()","500");  
}

function ly2(){
    $(".ly2").animate({
    top:'38px',
    opacity:'1'
  },2000);
    setTimeout("ly3()","888");  
}
function ly3(){
    $(".ly3").animate({
    top:'259px',
    opacity:'1'
  },1200);
}

function ly4(){
    $(".ly4").animate({
    width: '93px',
    height:'109px',
    right:'125px',
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