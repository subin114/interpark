/* 주목! 이달의책 버튼 */

$(function () {
    function prev4(){
        $('.month_wrap > ul > li:last').prependTo('.month_wrap > ul');
        $('.month_wrap > ul').css({marginLeft:-370}); 
        $('.month_wrap > ul').stop().animate({marginLeft:0},800);
    }

    function next4(){
        $('.month_wrap > ul').stop().animate({marginLeft:-370}, function(){
            $('.month_wrap  > ul > li:first').appendTo('.month_wrap > ul');
            $('.month_wrap > ul').css({marginLeft:0});
        });
    }

    function slide4(){
        $('.month_wrap > ul').stop().animate({marginLeft:-370}, function(){
            $('.month_wrap > ul li:first').appendTo('.month_wrap > ul');
            $('.month_wrap > ul').css({marginLeft:0});
        });
    }

    setInterval(slide4, 3000);

    $('.month_prev').click(function(){
        prev4();
    });

    $('.month_next').click(function(){
        next4();
    });
});