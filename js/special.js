$.ajax({

    url: "./json/special.json",

    dataType: "json",

    success: function (data) {

        if (data.length > 0) {


            for (var i in data) {

                $(".special_imgbox").eq(i).append('<a href="">' + "<img src='img/Special_img" + data[i].url + "'/>" + '</a>');

                $(".special_textbox").eq(i).append('<h3>' + data[i].num + "</h3>");

                $(".special_textbox").eq(i).append('<p><a href="">' + data[i].title + "</a></p>");

                $(".special_textbox").eq(i).append( '<span><del>' + data[i].sale + '</del><h5>' + data[i].price + '</h5></span>');

            }

        }

    }

});
