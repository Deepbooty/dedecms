//支持现代浏览器和IE8以上版本。
$(document).ready(function(){
  setTimeout("aqln_hover()","800");
  aqln_leave();
//box start
$(".box").hover(function(){
  var idx = $(this).attr("rel");
  $(this).oneTime(10,function(){  
    $(".imgcover[rel='"+idx+"']").animate({ opacity:'0.4'},100);
    /*$(".texplay[rel='"+idx+"']").animate({ height:'70px'},100,function(){});*/
      $(".lookdetail[rel='"+idx+"']").animate({top:'150px', opacity: 'show'},70,'linear',
      function(obj){
        $(".lookdetail[rel='"+idx+"']").animate({top:'75px', opacity: 'show'},50,'linear',function(obj){
          $(".lookdetail[rel='"+idx+"']").animate({top:'85px', opacity: 'show'},50,'linear',function(obj){
            $(".lookdetail[rel='"+idx+"']").animate({top:'40px', opacity: 'show'},50);
          });
        });
      })
    
  });
},function(){
  var idx = $(this).attr("rel");
  $(this).oneTime(10,function(){ 
    $(".imgcover[rel='"+idx+"']").stop().animate({ opacity:'0'},50);
    /*$(".texplay[rel='"+idx+"']").stop().animate({ height:'0px'},50);*/
    $(".lookdetail[rel='"+idx+"']").stop().animate({top:'-80px'},50);
  });

        
});
//box end 
//all start
$(".all").hover(function(){
  var idx = $(this).attr("rel");
        $(this).oneTime(10,function(){  
          a1();
    });
   
  function a1(){
    $(".a1[rel='"+idx+"']").animate({
          width:'100%',
          left:'0%'
        },100,function(){
          a2a3();
        });
  }

  function a2a3(){
    $(".asplay[rel='"+idx+"']").animate({
          height:'100%',
        },200);
    $(".a2[rel='"+idx+"']").animate({
          height:'100%',
        },100,function(){
          a4();
      });
    $(".a3[rel='"+idx+"']").animate({
          height:'100%',
        },100,function(){
          a5();
      });
  }
  function a4(){
    $(".a4[rel='"+idx+"']").animate({
          width:'50%',
        },50,function(){

      });
  }
  function a5(){
    $(".a5[rel='"+idx+"']").animate({
          width:'50%',
        },50,function(){

      });
  }
},function(){
    var idx = $(this).attr("rel");
    $(".a1[rel='"+idx+"']").stop(true, false);
        $(".a2[rel='"+idx+"']").stop(true, false);
        $(".a3[rel='"+idx+"']").stop(true, false);
        $(".a4[rel='"+idx+"']").stop(true, false);
        $(".a5[rel='"+idx+"']").stop(true, false);
          a4a5g();
function a4a5g(){
  $(".a4[rel='"+idx+"'][rel='"+idx+"']").animate({
        width:'0%',
      },50,function(){
        a2g();
    });
  $(".a5[rel='"+idx+"']").animate({
        width:'0%',
      },50,function(){
        a3g();
    });
    $(".asplay[rel='"+idx+"']").animate({
        height:'0',
      },200);
}
function a2g(){
  $(".a2[rel='"+idx+"']").animate({
        height:'0%',
      },100);
}
function a3g(){
  $(".a3[rel='"+idx+"']").animate({
        height:'0%',
      },100,function(){
        a1g();
    });
}
function a1g(){
  $(".a1[rel='"+idx+"']").animate({
        width:'0%',
        left:'50%'
      },100);
}
});
//all end   

  setTimeout(function(){
        $(".p1_1").animate({top:'130px',opacity: '1'});
        $(".p1_2").animate({top:'370px',opacity: '1'});
        $(".p1_3").animate({top:'445px',opacity: '1'});
     },"800");

//set article 

//set article   end

});










 


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



