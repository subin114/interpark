/* 북인사이드 */

$(function () {
	$(".inside_left li").mouseover(function () {
		var i = $(this).index();
		$(".inside_left li").removeClass("on2");
		$(".inside_left li").eq(i).addClass("on2");
		$(".inside_right > .inside_imgbox").stop().hide();
		$(".inside_right > .inside_imgbox").eq(i).stop().show();
		$(".inside_imgbox > span").stop().hide();
		$(".inside_imgbox > span").eq(i).stop().show();
	})
});