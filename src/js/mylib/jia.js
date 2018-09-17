
require(["../conf/config"], function () {



    //再加载各个模块
    require(["jquery"], function ($) {
        //第一层
        //地理位置转换
        //滑过“ 更换 ”
        $(".region_wrap").find(".change").mouseenter(function () {
            $(".hidden_city_list").show();          
            //滑过导航列表
            $(".hidden_list").find("li").mouseenter(function () {              
                $(".city_box").find("div").eq($(this).index()).show().siblings().hide();
                $(this).addClass("myhover").siblings().removeClass("myhover");
            })
        })
        //滑出
        $(".hidden_city_list").mouseleave(function(){
            setTimeout(() => {
                $(".hidden_city_list").hide();
            }, 500);             
        })
        //手机齐家
        $(".nav_info_right ul li").eq(5).mouseenter(function(){
            $(".nav_info_right ul li .ewm_box").show();
        })
        $(".nav_info_right ul li").eq(5).mouseleave(function(){
            setTimeout(() => {
                $(".nav_info_right ul li .ewm_box").hide();
            }, 300);
            
        }) 

        //第二层
        //点击展开
        $(".dropDown_ban_open").click(function(){
            // $(".dropDown_img1").fadeOut(500);
            // $(".dropDown_ban .dropDown_ban_open").fadeOut(500);
            // $(".dropDown_img2").css({"display":"block"}).fadeIn(500);
            $(".dropDown_img1").fadeOut(500);
            $(".dropDown_img2").show().parent().stop().animate({height:300},500,()=>{
                $(".dropDown_ban_down").show().fadeIn(1000);
            });
            $(this).fadeOut(100);
            
             //点击收起
            $(".dropDown_ban_down").click(function(){
                $(".dropDown_img2").fadeOut(500);
                $(".dropDown_img1").show().parent().stop().animate({height:90},500,()=>{
                    $(".dropDown_ban_open").show().fadeIn(1000);
                });
                $(this).fadeOut(100);               
            })
        })
        //点击关闭
        $(".dropDown_ban_close").click(function(){
            $(".dropDown_ban").hide();
        })

        //第三层
        
        /* $('.jia_nav ul li').each(function(index){
            console.log($(this).index());
            if($(this).index()==0){
                $(this).find("span").css({
                    "background":"url('img/jia-nav-icon.png') no-repeat 0px  -23px"
                });
            }else{
                $(this).find("span").css({
                    "background":"url('img/jia-nav-icon.png') no-repeat "+"-"+index*24+"px "+"0px"
                });
            }            
        }); */
        //给列表导航设置背景图
        for(let i=1;i<$(".jia_nav ul li").length-1;i++){
            
            $(".jia_nav ul li").eq(i).find("span").css({
                "background":"url('img/jia-nav-icon.png') no-repeat "+"-"+i*24+"px "+"0px"
            }); 
            console.log(i)          
        }
        //第一个列表导航单独设
        $(".jia_nav ul li").eq(0).find("span").css({
            "background":"url('img/jia-nav-icon.png') no-repeat 0px  -23px"
        });
        //列表导航滑入滑出
        $(".jia_nav ul li").on("mouseenter",function(){
            //box出现边框
            $(this).find(".big_box").css({"border":"1px solid #CCCCCC","border-radius":"4px"})
            //列表导航倒三角滑入滑出效果
            $(this).find(".jia_nav_menu").css({"color":"#d00"}).parent().find("i").css({"border": "5px solid transparent","border-bottom": "5px solid #d00"});

            $(this).on("mouseleave",function(){
                //box边框消失
                $(".big_box").css({"border":"none"});

                $(this).find(".jia_nav_menu").css({"color":"#666"}).parent().find("i").css({"border": "5px solid transparent","border-top":"5px solid #666"});
            })            
            //列表导航背景图的滑入滑出效果
            $(this).find("span").css({
                "background-position-y":"-23px"
            }); 
            $(this).on("mouseleave",function(){
                $(this).find("span").css({
                    "background-position-y":"0px"
                }); 
                //第一个列表导航背景图需要重新定义
                $(".jia_nav ul li").eq(0).find("span").css({
                    "background-position-y":"-23px"
                });
            })              
            //隐藏框的出现
            $(this).addClass("border_show").find(".zzx").show();
            $(this).find(".zzx p").on("mouseenter",function(){
                $(this).css({"background":"#DD0000","color":"white"});
                $(this).on("mouseleave",function(){
                    $(this).css({"background":"white","color":"#666"}); 
                })
            })
            $(this).on("mouseleave",function(){
                $(this).find(".zzx").hide();
            })
        })
        //第三块 滑入“旺铺”
        $(".jia_research .form_div span").on("mouseenter",function(){
            $(this).find(".reUpU").show().parent().find("i").css({"background":"url('img/top_nav_icos.png') no-repeat 0 0px"});
            $(this).on("mouseleave",function(){
                $(this).find(".reUpU").hide().parent().find("i").css({"background":"url('img/top_nav_icos.png') no-repeat 0 -29px"});
            })
        })    

        
        
        
        
        

    })
})
