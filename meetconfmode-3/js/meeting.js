

$(function(){

    //默认显示第一分会场的第一天的内容
    function _firstRun() {
        $(".meeting-agenda-container").hide();
        $(".meeting-agenda-container").eq(0).show();
    }
    _firstRun();



    // 会议流程显示切换
    $(".resp-tabs-item").click(function(){
        $(this).addClass("resp-tabs-active").siblings().removeClass("resp-tabs-active");
        $(".meeting-agenda-container").hide();
        var a = $(this).attr("data-a");
        $("div[data-b = "+a+"]").show();
    });



    // 会议新闻标题选中样式切换
    $(".news-title").click(function(){
        $(this).addClass("news-title-active").siblings().removeClass("news-title-active");
    });

     

    $(".news-text").each(function(){
        //设置显示获取字符串的字数  这个根据要求 看需要大概显示几行
           var maxwidth=280;   
           if($(this).text().length>maxwidth){
                //截取字符串
               $(this).text($(this).text().substring(0,maxwidth));
               //多余的用省略号显示
               $(this).html($(this).html()+"...");
           }
       });

    //<768px时会议新闻内容的展开切换
    hhh_ar = ["a"];
    function autoResize(){
        var windowWidth = $(window).width();
        if (windowWidth < 768) {
            $(".m-collapse").hide();
            $(".hide-news-title").click(function () {
                hhh = $(this).parents(".text-content-wraper").index();
                hhh_ar.push(hhh)
                if(hhh == hhh_ar[hhh_ar.length-2]){
                    $(this).next(".m-collapse").slideToggle();  
                }else{
                    $(".m-collapse").slideUp();
                    $(this).next(".m-collapse").slideDown();  
                    
                }
                // console.log("hhh="+hhh);
                // console.log("hhh_ar="+hhh_ar);
                // console.log(hhh_ar[hhh_ar.length-2] == hhh)
            })
            $(".text-content-wraper").removeClass("m-hidden").addClass("visible-xs");
        }else{
            $(".text-content-wraper").removeClass("visible-xs");
            $(".text-content-wraper:gt(1)").addClass("m-hidden");
            // 会议新闻内容显示切换
            $(".news-title").click(function(){
                $(".text-content-wraper").removeClass("m-hidden").hide();
                var a = $(this).attr("data-a");
                $("div[data-b = "+a+"]").show();
            });

            
        }
    }

    // i高度
    function autoHight(){
        var hh = $(".jjj").height();
        // console.log(hh)
        $("#data_line").height(hh);
    }
    
    autoHight();
    autoResize();

    $(window).resize(function(){
        autoHight();
        autoResize();
    })
    
    //go to top
    var backButton = $('#toTop');
    function backToTop() {
        $('html,body').animate({
            scrollTop: 0
        }, 800);
    }
    backButton.on('click', backToTop);

    $(window).on('scroll', function () {/*当滚动条的垂直位置大于浏览器所能看到的页面的那部分的高度时，回到顶部按钮就显示 */
        if ($(window).scrollTop() > $(window).height()*1.5)
        {
            backButton.fadeIn();
            backButton.addClass("toTopButton-active")
        }
        else{
            // backButton.fadeOut();
            backButton.removeClass("toTopButton-active");
            backButton.fadeOut(200)
        }

    });
    // $(window).trigger('scroll');/*触发滚动事件，避免刷新的时候不显示回到顶部按钮*/


    // $(".m-height").each(function(){
        // var mh = $(this).height();
        // var mhp = $(this).next().children(".content-text").height();
        // var halfmhp = $(".mmm-height").next().height()*0.25;
        // $(".m-height").height(mhp);
        // console.log( $(this).height());
        // console.log( $(this).next().height());
        // console.log( $(this).next().height()*0.5);
        // console.log($(this).children(".left-circle").position().top);
        // $(".m-height").children(".left-circle").css("top",$(".m-height").next().children(".content-text").height()*0.2)
        // $(".mmm-height").children(".left-circle").css("top",$(".mmm-height").next().height()*0.25)
        // console.log($(this).children(".left-circle").css("top",$(this).next().height()*0.5))
    // })
    // var mh = $(".m-height").height();
    // var mhp = $(".m-height").next().height();
    // // $(".m-height").height(mhp);
    // console.log($(".m-height").height());




















})