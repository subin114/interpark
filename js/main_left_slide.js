/* 메인 좌측 배너 슬라이드 */

$(function () {
    function prev2() {
        $('.left_side li:last').prependTo('.left_side');
    }

    function next2() {
        $('.left_side li:first').appendTo('.left_side');
    }

    $('.main_banner_prev').click(function () {
        prev2();
    });

    $('.main_banner_next').click(function () {
        next2();
    });
});
