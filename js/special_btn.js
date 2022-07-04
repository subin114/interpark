/* 특별판 Special Ed. 버튼 */

$(function () {
    function prev5(){
        $('.special_slide > li:last').prependTo('.special_slide');
    }

    function next5(){
        $('.special_slide > li:first').appendTo('.special_slide');
    }

    $('.special_prev').click(function(){
        prev5();
    });

    $('.special_next').click(function(){
        next5();
    });
});