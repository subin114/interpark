/* 이 책 어때 버튼 */

$(function () {
  var wid = $(".how").width();
  var i = $(".dot2 li.on").index();
  var len = $(".how>ul>li").length;
  $(".how_prev").click(function () {
    if (i == 0) {
      i = len - 1;
    } else {
      i = i - 1;
    }

    showSlide();
  });

  $(".how_next").click(function () {
    if (i == 3) {
      i = 0;
    } else {
      i = i + 1;
    }
    showSlide();
  });

  $(".dot2 li").click(function () {
    i = $(this).index();
    showSlide();
  });

  function showSlide() {
    $(".dot2 li").removeClass("on");
    $(".dot2 li").eq(i).addClass("on");
    $(".how>ul>li").stop(true, true).fadeOut();
    $(".how>ul>li").eq(i).stop(true, true).fadeIn();
  }

});