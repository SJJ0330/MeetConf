

$(function () {


    //默认显示第一分会场的第一天的内容
    function _firstRun() {
        $(".meeting-agenda-container").hide();
        $(".meeting-agenda-container").eq(0).show();
    }
    _firstRun();


    //会议流程切换
    $(".resp-tabs-item").eq(1).addClass("c-test");

    $(".resp-tabs-item").click(function () {
        $(this).addClass("resp-tabs-active").siblings().removeClass("resp-tabs-active");

        $(".resp-tabs-item").removeClass("c-test");
        $(this).next(".resp-tabs-item").addClass("c-test");
        $(this).addClass("c-test");

        $(".meeting-agenda-container").hide();
        var a = $(this).attr("data-a");
        $("div[data-b = " + a + "]").show();
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
            backButton.addClass("toTopButton--active")
        }
        else {
            // backButton.fadeOut();
            backButton.removeClass("toTopButton--active");
            backButton.fadeOut(200)
        }

    });
    $(window).trigger('scroll');/*触发滚动事件，避免刷新的时候显示回到顶部按钮*/





















})