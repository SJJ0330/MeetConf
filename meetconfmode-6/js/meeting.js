



// 滚动定位
$(function () {
    $("#menu-h").onePageNav();

})

$(function () {

    var liNum = 1 + $(".color-board").find("li").length;
    var width = (liNum * 30) + 10;
    var flag = 0;
    $(".theme-color").click(function () {
        if (flag == 0) {
            $(".color").css("width", width);
            flag = 1;
        } else {
            $(".color").css("width", 30);
            flag = 0;
        }
    });

    var blue = "#488dff";
    var red = "#f62b0a";
    var purple = "#6e0f6d";
    var bac = new Array();
    bac[0] = document.getElementById("agenda-days");
    bac[1] = document.getElementById("meetBtn");
    bac[2] = document.getElementById("backTop");
    bac[3] = document.getElementsByClassName("red-block");
    bac[4] = document.getElementsByClassName("emm");
    var docNum = 5;
    var font = new Array();
    font[0] = document.getElementsByClassName("active");
    font[1] = document.getElementsByClassName("agenda-des");
    font[2] = document.getElementsByClassName("agenda-time");
    font[3] = document.getElementsByClassName("loca-hotel");
    var fontNum = 4;
    var color = red;
    var today = "";
    $(".color-li").click(function () {
        var theme = $(this).attr("data-color");
        switch (theme) {
            case "blue":
                color = blue;
                today = "#3871d0";
                break;
            case "red":
                color = red;
                today = "#c72b11";
                break;
            case "purple":
                color = purple;
                today = "#4c0a4b";
        }
        $(".today").css("background-color", today);
        for (var i = 0; i < docNum; i++) {
            $(bac[i]).css("background-color", color);
        }
        for (var j = 0; j < fontNum; j++) {
            $(font[j]).css("color", color);
            $(".meetBtn-a").css("color", "#fff");
        }
    });
    $(".menu-a").hover(function () {
        $(this).css("color", color);
    }, function () {
        $(this).css("color", "#999");
    });

    $(".meetBtn").hover(function () {
        $(this).css("background-color", "#fff");
        $(".meetBtn-a").css("color", color);
    }, function () {
        $(this).css("background-color", color);
        $(".meetBtn-a").css("color", "#fff");
    });



    $(".backTop").hide();
    $(function () {
        //检测屏幕高度
        var height = $(window).height();
        var width = $(window).width();
        //scroll() 方法为滚动事件
        $(window).scroll(function () {
            if ($(window).scrollTop() > height) {                     //滚动出现回单顶部按钮
                $(".backTop").fadeIn(500);
            } else {
                $(".backTop").fadeOut(500);
            }

            // if ($(window).scrollTop()>30 && width<=500){                     //滚动导航变透明
            //     $(".menu").css("height","40px");
            //     $(".menu-v").css({"height":"40px","background-color":"#00000088","color":"#fff"});
            //     $(".menu-v i").css("line-height","40px");
            //     $("#menu-v").css({"top":"40px","background-color":"#00000088","color":"#fff"});
            //     $(".menu-v-a").css("color","#fff");
            // }else{
            //     $(".menu").css("height","40px");
            //     $(".menu-v").css({"height":"40px","background-color":"#00000088","color":"#fff"});
            //     $(".menu-v i").css("line-height","40px");
            //     $("#menu-v").css({"top":"40px","background-color":"#00000088","color":"#fff"});
            //     $(".menu-v-a").css("color","#fff");
            // }
        });
        $(".backTop").click(function () {                  //点击回到顶部
            $('body,html').animate({ scrollTop: 0 }, 100);
            return false;
        });
    });

    $(".red-block").eq(0).css({ "background": "#f62b0a", "width": "40px", "transition": "none" });    //第一个默认高亮
    $(window).scroll(function () {
        $(".nav-doc").each(function () {                   //滚动导航自动高亮
            var offset = $(this).offset().top - $(document).scrollTop();
            var i = $(".nav-doc").index(this);
            if (offset >= 0 && offset <= 85) {
                $(".menu-h-a").css("color", "#999");
                $(".menu-h-a").removeClass("active");
                $(".menu-h-a").eq(i).css("color", color);
                $(".menu-h-a").eq(i).addClass("active");
                $(".red-block").css({ "background": "#fff", "width": "0", "transition": "all .6s" });
                $(".red-block").eq(i).css({ "background": color, "width": "40px" });
                $(".red-block").eq(i).addClass("emm");
            }
        });
    });

    //主办方
    var device = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? "mobile" : "web";
    if (device == "web") {
        $(".qualifi-img").on("mouseenter", function () {
            console.log("hehe");
            $(".color-img").hide();
            $(this).find(".color-img").stop(false, true).fadeIn(200);
        })
        $(".qualifi-img").on("mouseleave", function () {
            $(".color-img").stop(false, true).fadeOut(200);
            console.log("hide");

        })
        // $(".qualifi-img").hover(function(){
        //     $(".color-img").hide();
        //     $(".color-img").eq($(".qualifi-img").index(this)).fadeIn(200);
        // },function(){
        //     $(".color-img").eq($(".qualifi-img").index(this)).hide();
        // });
    }

    //导航
    var dropdown = document.getElementById("menu-v");
    var menuI = document.getElementsByClassName("nav-all")[0];

    $(menuI).click(function () {         //点击打开或者关闭
        if ($(dropdown).hasClass("menu-v-height")) {
            $(dropdown).removeClass("menu-v-height");
            console.log("open")
        } else {
            $(dropdown).addClass("menu-v-height");
            console.log("close")
        }
    });
    // $(menuI).hover(function(){
    //     $(dropdown).removeClass("menu-v-height");
    //     console.log("hover")
    // });
    // $(dropdown).hover(function(){
    //     $(this).removeClass("menu-v-height");
    // },function(){
    //     $(this).addClass("menu-v-height");
    // });
    $(".menu-v-a").click(function () {
        $(dropdown).addClass("menu-v-height");
    });

    $(".menu-h-a").click(function () {
        $(".menu-h-a").removeClass("active");
        $(this).addClass("active");
        $(".red-block").addClass("invisible");
        $(".red-block").eq($(".menu-h-a").index(this)).removeClass("invisible");
    });


});




$(function () {

    //默认显示第一分会场的第一天的内容
    function _firstRun() {
        $(".agenda-day-content").hide();
        $(".agenda-day-content").eq(0).show();
        $(".agenda-day-content").eq(0).find($(".agenda-content-wrapper")).hide();
        $(".agenda-day-content").eq(0).find($(".agenda-content-wrapper")).eq(0).show();
    }
    _firstRun();

    // 会议分会场切换
    $(".resp-tabs-item").click(function () {
        $(this).addClass("today").siblings().removeClass("today");
        $(".agenda-day-content").hide();
        var a = $(this).attr("data-a");
        $("div[data-b = " + a + "]").show();

        $("div[data-b = " + a + "]").find(".sub-resp-tabs-list").find("li").eq(0).click();


    });
    // 会议日期切换
    $(".sub-resp-tabs-item").click(function () {
        $(this).addClass("sub-active").siblings().removeClass("sub-active");
        $(".agenda-content-wrapper").hide();
        var c = $(this).attr("data-c");
        $("div[data-d = " + c + "]").show();
    });


    //go to top
    var backButton = $('#toTop');
    function backToTop() {
        $('html,body').animate({
            scrollTop: 0
        }, 800);
    }
    backButton.on('click', backToTop);

    $(window).on('scroll', function () {/*当滚动条的垂直位置大于浏览器所能看到的页面的那部分的高度时，回到顶部按钮就显示 */
        if ($(window).scrollTop() > $(window).height() * 1.5) {
            backButton.fadeIn();
            backButton.addClass("toTopButton-active")
        }
        else {
            backButton.removeClass("toTopButton-active");
            backButton.fadeOut(200)
        }

    });

















})