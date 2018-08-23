

$(function(){


    //默认显示第一分会场的第一天的内容
    function _firstRun() {
        $(".meeting-agenda-container").hide();
        $(".meeting-agenda-container").eq(0).show();
        $(".meeting-agenda-container").eq(0).find($(".mm-agenda")).hide();
        $(".meeting-agenda-container").eq(0).find($(".mm-agenda")).eq(0).show();
    }
    _firstRun();

    // 分会场切换
    $(".resp-tabs-item").click(function(){
        $(this).addClass("resp-tabs-active").siblings().removeClass("resp-tabs-active");
        $(".meeting-agenda-container").hide();
        var a = $(this).attr("data-a");
        $("div[data-b = "+a+"]").show();

        $("div[data-b = " + a + "]").find(".mm-time-row").find("li").eq(0).click();
    });




    // 日期切换
    $(".mm-time").click(function(){
        $(this).addClass("mm-time-active").siblings().removeClass("mm-time-active");
        $(".mm-agenda").hide();
        var c = $(this).attr("data-c");
        $("div[data-d = " + c + "]").show();
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
            backButton.removeClass("toTopButton-active");
            backButton.fadeOut(200)
        }

    });


    // i高度
    function autoHight(){
        var hh = $(".jjj").height();
        // console.log(hh)
        $("#data_line").height(hh);
    }
    autoHight();
    $(window).resize(function(){
        autoHight();
    })





















})