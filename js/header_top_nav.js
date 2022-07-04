/* 마이페이지 */

$(function(){
  $('.mypage').mouseover(function(){
    $('.mypage img').attr('src','img/arrow_up.png')
    $('.mypage_list').stop().slideDown();
  }).mouseout(function(){
    $('.mypage img').attr('src','img/arrow_down.png')
    $('.mypage_list').stop().slideUp();
  });
});


/* language */

$(function(){
  $('.language').mouseover(function(){
    $('.language img').attr('src','img/arrow_up.png')
    $('.language_list').stop().slideDown();
  }).mouseout(function(){
    $('.language img').attr('src','img/arrow_down.png')
    $('.language_list').stop().slideUp();
  });
});