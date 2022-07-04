/* dvd 슬라이드 */

$(function () {
    function prev8() {
        $('.dvd_content1 ul li:last').prependTo('.dvd_content1 ul');
        $('.dvd_content1 ul').css({marginLeft:-345}); 
        $('.dvd_content1 ul').stop().animate({ marginLeft: 0 }, 800);
    }

    function next8() {
        $('.dvd_content1 ul').stop().animate({ marginLeft: -345 }, function () {
            $('.dvd_content1 ul li:first').appendTo('.dvd_content1 ul');
            $('.dvd_content1 ul').css({ marginLeft: 0 });
        });
    }

    $('.dvd_prev').click(function () {
        prev8();
    });

    $('.dvd_next').click(function () {
        next8();
    });
});