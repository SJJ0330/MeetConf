

$(function(){

    //默认显示第一分会场的第一天的内容
    function _firstRun() {
        $(".meeting-agenda-container").hide();
        $(".meeting-agenda-container").eq(0).show();
        $(".meeting-agenda-container").eq(0).find($(".sub-time-content")).hide();
        $(".meeting-agenda-container").eq(0).find($(".sub-time-content")).eq(0).show();
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

        $(".sub-time-content").hide();
        var c = $(this).attr("data-c");
        $("div[data-d = "+c+"]").show();
    });



    $('.news-text').each(function(){
        //设置显示获取字符串的字数  这个根绝要求 看需要大概显示几行
           var maxwidth=80;   
           if($(this).text().length>maxwidth){
                //截取字符串
               $(this).text($(this).text().substring(0,maxwidth));
               //多余的用省略号显示
               $(this).html($(this).html()+'...');
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



