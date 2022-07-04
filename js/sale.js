/* 특가할인 & 정가인하 */

$(function() {
  
  $(".salemenu>li").mouseover(function () {
    var i = $(this).index();
    $(".salemenu>li").removeClass("sale_on");
    $(".salemenu>li").eq(i).addClass("sale_on");
    $(".kind>li").stop().hide();
    $(".kind>li").eq(i).stop().show();
  })

});