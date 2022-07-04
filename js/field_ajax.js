/* 분야별 추천 - 문학 */

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    data: { query:"문학"},
    headers:{Authorization: "KakaoAK 8f2acc4c7c2927695f8f4a1e398e0c1e"}
})
.done(function( msg ) {

    console.log( msg );
    var divs = document.getElementsByTagName('div');

    for(var i=0; i<divs.length; i++){

        var str=msg.documents[i].title;
        var str2=str.substring(0,25);

        $("#field_box_wrap1 li").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
        $("#field_box_wrap1 li").eq(i).append("<h4><a href=''>"+str2+"..."+"</a></h4>");
        $("#field_box_wrap1 li").eq(i).append("<span>"+msg.documents[i].sale_price+"원"+"</span>");      

    }

});



/* 분야별 추천 - 인문 */

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    data: { query:"인문"},
    headers:{Authorization: "KakaoAK 8f2acc4c7c2927695f8f4a1e398e0c1e"}
})
.done(function( msg ) {

    console.log( msg );
    var divs = document.getElementsByTagName('div');

    for(var i=0; i<divs.length; i++){

        var str=msg.documents[i].title;
        var str2=str.substring(0,25);

        $("#field_box_wrap2 li").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
        $("#field_box_wrap2 li").eq(i).append("<h4><a href=''>"+str2+"..."+"</a></h4>");
        $("#field_box_wrap2 li").eq(i).append("<span>"+msg.documents[i].sale_price+"원"+"</span>");      

    }

});



/* 분야별 추천 - 경제 */

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    data: { query:"경제상식"},
    headers:{Authorization: "KakaoAK 8f2acc4c7c2927695f8f4a1e398e0c1e"}
})
.done(function( msg ) {

    console.log( msg );
    var divs = document.getElementsByTagName('div');

    for(var i=0; i<divs.length; i++){

        var str=msg.documents[i].title;
        var str2=str.substring(0,25);

        $("#field_box_wrap3 li").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
        $("#field_box_wrap3 li").eq(i).append("<h4><a href=''>"+str2+"..."+"</a></h4>");
        $("#field_box_wrap3 li").eq(i).append("<span>"+msg.documents[i].sale_price+"원"+"</span>");      

    }

});



/* 분야별 추천 - 아동 */

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    data: { query:"아동"},
    headers:{Authorization: "KakaoAK 8f2acc4c7c2927695f8f4a1e398e0c1e"}
})
.done(function( msg ) {

    console.log( msg );
    var divs = document.getElementsByTagName('div');

    for(var i=0; i<divs.length; i++){

        var str=msg.documents[i].title;
        var str2=str.substring(0,25);

        $("#field_box_wrap4 li").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
        $("#field_box_wrap4 li").eq(i).append("<h4><a href=''>"+str2+"..."+"</a></h4>");
        $("#field_box_wrap4 li").eq(i).append("<span>"+msg.documents[i].sale_price+"원"+"</span>");      

    }

});



/* 분야별 추천 - 학습 */

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    data: { query:"학습"},
    headers:{Authorization: "KakaoAK 8f2acc4c7c2927695f8f4a1e398e0c1e"}
})
.done(function( msg ) {

    console.log( msg );
    var divs = document.getElementsByTagName('div');

    for(var i=0; i<divs.length; i++){

        var str=msg.documents[i].title;
        var str2=str.substring(0,25);

        $("#field_box_wrap5 li").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
        $("#field_box_wrap5 li").eq(i).append("<h4><a href=''>"+str2+"..."+"</a></h4>");
        $("#field_box_wrap5 li").eq(i).append("<span>"+msg.documents[i].sale_price+"원"+"</span>");      

    }

});



/* 분야별 추천 - 외국도서 */

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book",
    data: { query:"everyone"},
    headers:{Authorization: "KakaoAK 8f2acc4c7c2927695f8f4a1e398e0c1e"}
})
.done(function( msg ) {

    console.log( msg );
    var divs = document.getElementsByTagName('div');

    for(var i=0; i<divs.length; i++){

        var str=msg.documents[i].title;
        var str2=str.substring(0,25);

        $("#field_box_wrap6 li").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
        $("#field_box_wrap6 li").eq(i).append("<h4><a href=''>"+str2+"..."+"</a></h4>");
        $("#field_box_wrap6 li").eq(i).append("<span>"+msg.documents[i].sale_price+"원"+"</span>");      

    }

});