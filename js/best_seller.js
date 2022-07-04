/* 베스트 셀러 */

$(function(){

    $('.best_ranking2').hide();
    $('.best_wrap > div:nth-of-type(2)').mouseover(function(){

        $(".today_box").css({"border-bottom":"1px solid #888"})
        $(".week_box").css({"border-bottom":"none","border-right":"none"})

        $('.best_ranking2').stop().fadeIn();
        $('.best_ranking1').stop().hide();

    });

    $('.best_wrap > div:nth-of-type(1)').mouseover(function(){
        $(".today_box").css({"border-bottom":"none"})
        $(".week_box").css({"border-bottom":"1px solid #888"})

        $('.best_ranking1').stop().fadeIn();
        $('.best_ranking2').stop().hide();

    });

});