/* 이 책 어때? */
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query:"포토샵" },
  headers:{Authorization: "KakaoAK 8f2acc4c7c2927695f8f4a1e398e0c1e"}
})
.done(function( msg ) {

  console.log( msg.documents[1].title );
  console.log( msg.documents[1].thumbnail );


  var divs = document.getElementsByTagName('div');

  for(var i=0; i<divs.length; i++){

    $(".how_content > div").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/><br>" + "<p>쉽게 배우는 그래픽 입문서</p>" + "<span>" + msg.documents[i].title + "</span>");

  }

});