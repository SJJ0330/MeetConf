
// 滚动定位
$(function () {
    $("#menu-h").onePageNav();

})



$(document).ready(function () {

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
    bac[0] = document.getElementById("meetBtn");
    bac[1] = document.getElementById("backTop");
    bac[2] = document.getElementsByClassName("red-block");
    bac[3] = document.getElementsByClassName("emm");
    bac[4] = document.getElementsByClassName("agenda-break");
    bac[5] = document.getElementsByClassName("foot");
    var docNum = 6;
    var font = new Array();
    font[0] = document.getElementsByClassName("loca-hotel");
    var fontNum = 1;
    var color = purple;
    var gray = "";
    var ccolor = "#ffa6fe";
    $(".color-li").click(function () {
        var theme = $(this).attr("data-color");
        switch (theme) {
            case "blue":
                color = blue;
                gray = "#122e4461";
                ccolor = color;
                break;
            case "red":
                color = red;
                gray = "#42140d5c";
                ccolor = color;
                break;
            case "purple":
                color = purple;
                gray = "#44002961";
        }
        $(".today").css("color", color);
        $(".agenda-days").css("border-bottom-color", color);
        $(".bg-gray").css("background-color", gray);
        $(".active").css("color", ccolor);
        for (var i = 0; i < docNum; i++) {
            $(bac[i]).css("background-color", color);
        }
        for (var j = 0; j < fontNum; j++) {
            $(font[j]).css("color", color);
            $(".meetBtn-a").css("color", "#fff");
        }
    });
    $(".menu-a").hover(function () {
        $(this).css("color", ccolor);
    }, function () {
        $(this).css("color", "#fff");
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
        $(".bg").css("height", height);
        $(".bg-bg").css("height", height);
        var width = $(window).width();
        //scroll() 方法为滚动事件
        $(window).scroll(function () {
            if ($(window).scrollTop() > 550) {
                $(".bg").removeClass("bg-container");
            } else {
                $(".bg").addClass("bg-container");
            }

            if ($(window).scrollTop() > 500) {
                $(".backTop").fadeIn(500);                //滚动出现回单顶部按钮
                // if(width>=768){
                $(".menu").css("background", "#494949");                     //滚动导航变不透明

            } else {
                $(".backTop").fadeOut(500);
                $(".menu").css("background", "transparent");

            }
        });
        $(".backTop").click(function () {                  //点击回到顶部
            $('body,html').animate({ scrollTop: 0 }, 100);
            return false;
        });
    });

    $(window).scroll(function () {
        $(".nav-doc").each(function () {                   //滚动导航自动高亮
            var offset = $(this).offset().top - $(document).scrollTop();
            var footOffset = $(".foot").offset().top - $(document).scrollTop();
            var i = $(".nav-doc").index(this);
            var height = $(window).height();
            if (offset >= 0 && offset <= 85) {
                $(".menu-h-a").css("color", "#fff");
                $(".menu-h-a").removeClass("active");
                $(".menu-h-a").eq(i).css("color", ccolor);
                $(".menu-h-a").eq(i).addClass("active");
            }
            if (footOffset <= height) {
                $(".menu-h-a").css("color", "#fff");
                $(".menu-h-a").removeClass("active");
                $(".menu-h-a").eq(5).css("color", ccolor);
                $(".menu-h-a").eq(5).addClass("active");
            }
        });
    });




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

    $(".menu-v-a").click(function () {
        $(dropdown).addClass("menu-v-height");
    });

    $(".menu-h-a").click(function () {
        $(".menu-h-a").removeClass("active");
        $(this).addClass("active");
        $(this).css("color", "#ffa6fe");
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
    $(".agenda-day").click(function () {
        $(this).addClass("today").siblings().removeClass("today");
        $(".agenda-day-content").hide();
        var a = $(this).attr("data-a");
        $("div[data-b = " + a + "]").show();

        $("div[data-b = " + a + "]").find(".sub-agenda-days").find("span").eq(0).click();


    });
    // 会议日期切换
    $(".sub-agenda-day").click(function () {
        $(this).addClass("sub-active").siblings().removeClass("sub-active");
        $(".agenda-content-wrapper").hide();
        var c = $(this).attr("data-c");
        $("div[data-d = " + c + "]").show();
    });






    $('.news-text').each(function () {
        //设置显示获取字符串的字数  这个根绝要求 看需要大概显示几行
        var maxwidth = 80;
        if ($(this).text().length > maxwidth) {
            //截取字符串
            $(this).text($(this).text().substring(0, maxwidth));
            //多余的用省略号显示
            $(this).html($(this).html() + '...');
        }
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