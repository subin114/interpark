$.ajax({

    url: "./json/month.json",

    dataType: "json",

    success: function (data) {

        if (data.length > 0) {


            for (var i in data) {

                $(".month_imgbox").eq(i).append('<a href="#">' + "<img src='img/month_img" + data[i].url + "'/>" + '</a>');

                $(".month_content").eq(i).append('<p><a href="#">' + data[i].title + "</a><p>");

                $(".month_content").eq(i).append( '<del>' + data[i].sale + '</del><h5>' + '<p class="month_price">' + data[i].price + '</p>');

            }

        }

    }

});
