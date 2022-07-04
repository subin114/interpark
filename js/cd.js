$.ajax({

    url: "./json/cd.json",

    dataType: "json",

    success: function (data) {

        if (data.length > 0) {


            for (var i in data) {

                $(".cd_imgbox1").eq(i).append("<img src='img/CD_bimg" + data[i].url + "'/>");

                $(".cd_textbox1").eq(i).append('<p>' + data[i].title + '</p>');

                $(".cd_textbox1").eq(i).append( '<span><del>' + data[i].sale + '</del><h4>' + data[i].price + '</h4>' + '<p>' + data[i].point + '</p></span>');

            }

        }

    }

});
