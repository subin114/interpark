/* 서브 메뉴 */

$(function () {
	$("#submenu_nav>ul>li").click(function () {
		var i = $(this).index();
		$("#submenu_nav>ul>li").removeClass("on1");
		$("#submenu_nav>ul>li").eq(i).addClass("on1");
	})
});