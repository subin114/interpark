/* cd 슬라이드 */

$(function () {
    function prev7() {
        $('.cd_content1 ul li:last').prependTo('.cd_content1 ul');
        $('.cd_content1 ul').css({marginLeft:-345}); 
        $('.cd_content1 ul').stop().animate({ marginLeft: 0 }, 800);
    }

    function next7() {
        $('.cd_content1 ul').stop().animate({ marginLeft: -345 }, function () {
            $('.cd_content1 ul li:first').appendTo('.cd_content1 ul');
            $('.cd_content1 ul').css({ marginLeft: 0 });
        });
    }

    $('.cd_prev').click(function () {
        prev7();
    });

    $('.cd_next').click(function () {
        next7();
    });
});