
//百度API
// $(document).ready(function() {
//     var map = new BMap.Map("map-container");
//     map.setMapStyle({style:'grayscale'});
//     map.setCurrentCity("南京");
//     map.centerAndZoom(new BMap.Point(118.960036, 32.113770), 13);
//     map.disableScrollWheelZoom();
//     $("#map-container").click(function(){
//         map.enableScrollWheelZoom();
//     });
//     // map.disableDragging();
//     // map.addEventListener("touchstart",function(e){
//     //
//     // });
//
//     var myIcon = new BMap.Icon("img/map-point.png", new BMap.Size(32, 32), {
//         // 指定定位位置
//         offset: new BMap.Size(10, 25)
//         // 当需要从一幅较大的图片中截取某部分作为标注图标时，需要指定大图的偏移位置
//         // imageOffset: new BMap.Size(0, 0 - i * 25)
//         // 设置图片偏移
//     });
//     var marker = new BMap.Marker(new BMap.Point( "118.960036" , "32.113770"),{icon: myIcon});
//
//     map.addOverlay(marker);
//     var venue_name = "南京大学杜厦图书馆";
//     var venue_street = "仙林大道163号";
//     var licontent = "<b>" + venue_name + "</b><br>";
//     licontent += "<span><strong>地址：</strong>" + venue_street  + "</span><br>";
//     licontent += "<span class=\"input\"><label><strong id=\"start\">起点：</strong></label>" +
//         "<input style=\"width:80%;\" class=\"outset form-control\" type=\"text\" name=\"origin\" value=\"\"/><br><br>" +
//         "<input class=\"outset-but btn btn-sm btn-primary pull-left\" style=\"margin-right:10px;\" id= \"bus\" type=\"button\" value=\"公交\" />" +
//         "<input class=\"outset-but btn btn-sm btn-primary pull-left\" id=\"car\" type=\"button\" value=\"驾车\" />" +
//         "<a class=\"gotob\" ></a>" +
//         "</span>";
//     var hiddeninput="<input type=\"hidden\" value=\""+'<%= venue.city %>'+"\" name=\"region\" />" +
//         "<input type=\"hidden\" value=\"html\" name=\"output\" />" +
//         "<input type=\"hidden\" value=\"driving\" name=\"mode\" />" +
//         "<input type=\"hidden\" value=\"latlng:"+marker.getPosition().lat+","+marker.getPosition().lng+"|name:"+"\" name=\"destination\" />";
//     var content1 ="<form class=\"form-inline\" id=\"gotobaiduform\" target=\"_blank\" method=\"get\">" + licontent +hiddeninput+"</form>";
//
//     var opts1 = { width: 300 };
//     var infoWindow = new BMap.InfoWindow(content1, opts1);
//     marker.openInfoWindow(infoWindow);
//     marker.addEventListener('click',function(){
//         marker.openInfoWindow(infoWindow);
//     });
//     //
//     // var start = null;
//     // var end = "文澜路99号";
//     //
//     // $("#car").click(function(){
//     //     start = document.getElementById("start").innerText;
//     //     map.clearOverlays();
//     //     search(start,end,1);
//     //     function search(start,end,route){
//     //         var driving = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true},policy: route});
//     //         driving.search(start,end);
//     //     }
//     // });
//     // $("#bus").click(function(){
//     //     start = document.getElementById("start").innerText;
//     //     map.clearOverlays();
//     //     search(start, end, 1);
//     //     alert("555");
//     //     function search(start, end, route) {
//     //         transit.setPolicy(route);
//     //         transit.search(start, end);
//     //     }
//     // });
// });


//-----------------------------------------------------------------------------------------------------------


$(function () {                                          // 滚动定位
    $("#nav-ul").onePageNav();
});

$(document).ready(function () {                       //主题色

    var liNum = 1 + $(".color-board").find("li").length;
    var colorWidth = (liNum * 30) + 10;
    var flag = 0;
    $(".theme-color").click(function () {
        if (flag == 0) {
            $(".color").css("width", colorWidth);
            flag = 1;
        } else {
            $(".color").css("width", 30);
            flag = 0;
        }
    });

    var blue = "#488dff";
    var red = "#f62b0a";
    var purple = "#ab25a9";
    var green = "#1ad2a8";
    var rcolor = "#374045";
    var white = "#fff";
    var bac = document.getElementsByClassName("chgBgColor");
    var fnt = document.getElementsByClassName("chgFtColor");
    var gry5 = document.getElementsByClassName("chgGrColor5");
    var border = document.getElementsByClassName("chgBorderColor");
    var iconfont = document.getElementsByClassName("iconfont");
    var color = green;
    var gray5 = "rgba(72,244,198,.5)";
    var fontColor = green;
    $(".color-li").click(function () {
        var theme = $(this).attr("data-color");
        switch (theme) {
            case "blue":
                color = blue;
                fontColor = color;
                gray5 = "rgba(72,141,255,.5)";
                $(".main-header").css("background", "rgba(0, 0, 0, 0) linear-gradient(to right, #003181 0%, #7c49ab 100%, #7d387f 100%) repeat scroll 0 0");
                $(".bg-gray").css("background", "rgba(0, 0, 0, 0) linear-gradient(to right, #003181 0%, #7c49ab 100%, #7d387f 100%) repeat scroll 0 0");
                break;
            case "red":
                color = red;
                fontColor = color;
                gray5 = "rgba(165,46,28,.5)";
                $(".main-header").css("background", "rgba(0, 0, 0, 0) linear-gradient(to right, #985a4f 0%, #7c49ab 100%, #7d387f 100%) repeat scroll 0 0");
                $(".bg-gray").css("background", "rgba(0, 0, 0, 0) linear-gradient(to right, #985a4f 0%, #7c49ab 100%, #7d387f 100%) repeat scroll 0 0");
                break;
            case "green":
                color = green;
                fontColor = color;
                gray5 = "rgba(72,244,198,.5)";
                $(".main-header").css("background", "rgba(0, 0, 0, 0) linear-gradient(to right, #1eb089 0%, #7c49ab 100%, #7db9e8 100%) repeat scroll 0 0");
                $(".bg-gray").css("background", "rgba(0, 0, 0, 0) linear-gradient(to right, #1eb089 0%, #7c49ab 100%, #7db9e8 100%) repeat scroll 0 0");
                break;
            case "purple":
                color = purple;
                fontColor = "#ffabfe";
                gray5 = "rgba(165,83,132,.5)";
                $(".main-header").css("background", "rgba(0, 0, 0, 0) linear-gradient(to right, #ad8ada 0%, #7c49ab 100%, #7db9e8 100%) repeat scroll 0 0");
                $(".bg-gray").css("background", "rgba(0, 0, 0, 0) linear-gradient(to right, #ad8ada 0%, #7c49ab 100%, #7db9e8 100%) repeat scroll 0 0");
        }
        $(".active").css({ "color": fontColor, "border-color": color });
        $(bac).css("background-color", color);
        $(gry5).css("background-color", gray5);
        $(fnt).css("color", color);
        $(iconfont).css("color", color);
        $(".backTop .iconfont").css("color", white);
        $(border).css("border-color", color);
        $(".section-program .tabs-header .currentTab").css({ "color": white, "background-color": color });
    });

    $(".backTop").hide();

    $(function () {                             //导航
        //检测屏幕高度

        var width = $(window).width();
        var height = $(window).height();

        var dropdown = document.getElementById("navbar");
        var mobileMenuToggle = document.getElementsByClassName("mobile-nav-toggle")[0];
        var header = document.getElementsByClassName("main-header")[0];
        var navLi = document.getElementsByClassName("nav-li");
        var navHeight = $("#nav-ul").height();
        var headerHeight = $(header).height();

        $(navLi).hover(function () {
            $(this).css("color", fontColor);
        }, function () {
            $(this).css("color", white);
        });

        if (width < 992) {
            $(header).css("background", "none");
            $(header).css("background", "rgba(0,0,0,.5)");
            $(dropdown).css("top", headerHeight);
            $(navLi).removeClass("active");

            $(navLi).click(function () {                 //点击Li关闭
                $(dropdown).addClass("nav-height");
                $(dropdown).css("height", "0");
            });
        }
        if (width > 992) {
            $(dropdown).css({ "top": "0" });
        }

        $(mobileMenuToggle).click(function () {         //点击打开或者关闭
            if ($(dropdown).hasClass("nav-height")) {
                $(dropdown).removeClass("nav-height");
                $(dropdown).css({ "height": navHeight, "color": white, "background-color": "rgba(0,0,0,.5)" });          //写上具体高度transition才能起效果
                console.log("open")
            } else {
                $(dropdown).addClass("nav-height");
                $(dropdown).css("height", "0");
                console.log("close")
            }
        });

        //scroll() 方法为滚动事件
        $(window).scroll(function () {
            if ($(window).scrollTop() > 500) {
                $(".backTop").fadeIn(500);                //滚动出现回单顶部按钮
            } else {
                $(".backTop").fadeOut(500);
            }
        });
        $(".backTop").click(function () {                  //点击回到顶部
            $('body,html').animate({ scrollTop: 0 }, 100);
            return false;
        });

        $(window).scroll(function () {                            //滚动导航自动高亮
            if (width > 1200) {
                var section = document.getElementsByClassName("section");
                $(section).each(function () {
                    var offset = $(this).offset().top - $(document).scrollTop();
                    var footOffset = $(".main-footer").offset().top - $(document).scrollTop();
                    var i = $(section).index(this);
                    if (offset >= 0 && offset <= 85) {
                        $(navLi).css("color", white);
                        $(navLi).eq(i).css("color", fontColor);
                        $(navLi).removeClass("active");
                        $(navLi).eq(i).addClass("active");
                        $(navLi).eq(i).css("border-color", color);
                    }
                    if (footOffset <= height) {
                        $(navLi).css("color", white);
                        $(navLi).eq(6).css("color", fontColor);
                        $(navLi).removeClass("active");
                        $(navLi).eq(6).addClass("active");
                        $(navLi).eq(6).css("border-color", color);
                    }
                });
            }
        });
    });


    //议程padding-top
    var aboutBox = document.getElementById("about-box");
    var aboutHeight = $(aboutBox).height();
    var program = document.getElementById("program");
    var about = document.getElementById("about");
    $(about).css("height", aboutHeight);
    var width = $(window).width();
    if (width > 768) {
        $(program).css("padding-top", aboutHeight / 2 + 40);
    }

});




$(function () {


    //默认显示第一分会场的第一天的内容
    function _firstRun() {
        $(".tabs-body").hide();
        $(".tabs-body").eq(0).show();
        $(".tabs-body").eq(0).find($(".program-tab")).hide();
        $(".tabs-body").eq(0).find($(".program-tab")).eq(0).show();
    }
    _firstRun();


    // 会议分会场切换
    $(".mm-program-tab-link").click(function () {
        $(this).addClass("today").siblings().removeClass("today");
        $(this).addClass("currentTab").siblings().removeClass("currentTab");

        $(".tabs-body").hide();
        var a = $(this).attr("data-a");
        $("div[data-b = " + a + "]").addClass("currentTab").show();

        $("div[data-b = " + a + "]").find(".clean-list").find("li").eq(0).click();

    });


    // 会议日期切换
    $(".program-tab-link").click(function () {
        $(this).addClass("sub-active").siblings().removeClass("sub-active");// 会议日期选中样式切换

        $(".program-tab").addClass("currentTab").hide();
        var c = $(this).attr("data-c");
        $("div[data-d = " + c + "]").show();
    });


    //嘉宾切换
    $(".speaker-tab-link").click(function () {
        $(this).addClass("current").siblings().removeClass("current");
    });

    $(".speaker-tab-link").click(function () {
        $(".speaker-tab").removeClass("hidden").hide();
        var dtl = $(this).attr("data-tab-link");
        $("div[data-tab = " + dtl + "]").addClass("currentTab").show();
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