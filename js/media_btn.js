/* 미디어 추천 버튼 */

$(function () {
  var wid = $(".media").width();
  var i = $(".dot1 li.on").index();
  var len = $(".media>ul>li").length;
  $(".media_prev").click(function () {
    if (i == 0) {
      i = len - 1;
    } else {
      i = i - 1;
    }

    showSlide();
  });

  $(".media_next").click(function () {
    if (i == 2) {
      i = 0;
    } else {
      i = i + 1;
    }
    showSlide();
  });

  $(".dot1 li").click(function () {
    i = $(this).index();
    showSlide();
  });

  function showSlide() {
    $(".dot1 li").removeClass("on");
    $(".dot1 li").eq(i).addClass("on");
    $(".media>ul>li").stop(true, true).fadeOut();
    $(".media>ul>li").eq(i).stop(true, true).fadeIn();
  }

});