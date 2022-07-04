/* 인터파크 추천! */

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query:"정보처리기능사" },
  headers:{Authorization: "KakaoAK 8f2acc4c7c2927695f8f4a1e398e0c1e"}
})
.done(function( msg ) {

  console.log( msg.documents[1].title );
  console.log( msg.documents[1].thumbnail );



  var divs = document.getElementsByTagName('div');

  for(var i=0; i<divs.length; i++){

    $(".inter_imgbox").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
    $(".inter_content > p").eq(i).append(msg.documents[i].title);


    var str=msg.documents[i].contents;
    var main1str2=str.substring(0,70);

    $(".inter_content > .content > p").eq(i).append("<p>"+main1str2+"</p>");

  }

});