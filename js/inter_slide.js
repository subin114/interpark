/* 인터파크 추천 슬라이드 */

$(function () {
    function prev3() {
        $('.main1_slide li:last').prependTo('.main1_slide');
        $('.main1_slide').css({marginLeft:-470}); 
        $('.main1_slide').stop().animate({ marginLeft: 0 }, 800);
    }

    function next3() {
        $('.main1_slide').stop().animate({ marginLeft: -470 }, function () {
            $('.main1_slide li:first').appendTo('.main1_slide');
            $('.main1_slide').css({ marginLeft: 0 });
        });
    }

    function slide3() {
        $('.main1_slide').stop().animate({ marginLeft: -470 }, function () {
            $('.main1_slide li:first').appendTo('.main1_slide');
            $('.main1_slide').css({ marginLeft: 0 });
        });
    }

    setInterval(slide3, 5000);

    $('.inter_prev').click(function () {
        prev3();
    });

    $('.inter_next').click(function () {
        next3();
    });
});