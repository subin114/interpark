$.ajax({

    url: "./json/dvd.json",

    dataType: "json",

    success: function (data) {

        if (data.length > 0) {


            for (var i in data) {

                $(".dvd_imgbox1").eq(i).append("<img src='img/DVD_img" + data[i].url + "'/>");

                $(".dvd_textbox1").eq(i).append('<p>' + data[i].title + '</p>');

                $(".dvd_textbox1").eq(i).append( '<span><del>' + data[i].sale + '</del><h4>' + data[i].price + '</h4>' + '<p>' + data[i].point + '</p></span>');

            }

        }

    }

});
