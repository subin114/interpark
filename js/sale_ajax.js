/* 특가할인 */
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query:"GOGO 카카오" },
  headers:{Authorization: "KakaoAK 8f2acc4c7c2927695f8f4a1e398e0c1e"}
})
.done(function( msg ) {

  console.log( msg.documents[1].title );
  console.log( msg.documents[1].thumbnail );



  var divs = document.getElementsByTagName('div');

  for(var i=0; i<divs.length; i++){

    $(".sale_imgbox1").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
    $(".sale_textbox1").eq(i).append("<h4>" + msg.documents[i].title + "</h4>" + "<p>정가 " + msg.documents[i].price + "원" + "</p>" + "<h5>"+msg.documents[i].sale_price + "원" + "</h5>");

  }

});



/* 정가인하 */
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query:"엉뚱발랄 콩순이 스티커" },
  headers:{Authorization: "KakaoAK 8f2acc4c7c2927695f8f4a1e398e0c1e"}
})
.done(function( msg ) {

  console.log( msg.documents[1].title );
  console.log( msg.documents[1].thumbnail );



  var divs = document.getElementsByTagName('div');

  for(var i=0; i<divs.length; i++){

    $(".sale_imgbox2").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
    $(".sale_textbox2").eq(i).append("<h4>" + msg.documents[i].title + "</h4>" + "<p>정가 " + msg.documents[i].price + "원" + "</p>" + "<h5>"+msg.documents[i].sale_price + "원" + "</h5>");

  }

});