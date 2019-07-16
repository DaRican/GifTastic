/$(document).ready(function () {

var subject = ["mustang", "corvette", "camaro", "wrangler", "f150"];

//Display the default buttons on the page

for (var i = 0; i < subject.length; i++) {
    var makeButtons =
        $('<button').text(subject[i]).addClass('onLoadButtons');
    makeButtons.attr("car-model", subject[i]);
    $('#buttons').append(makeButtons);
};

$(".onLoadButtons").on('click', function () {
    var carModel = $(this).attr('car-model');
    var queryURL = ""

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data
        for (var k = 0; k < results.length; k++) {
            var picDiv = $('<div>');
            var rating = results[k].rating;

            var p = $('<p>').text("Rating: " + rating);

            var carPic = $('<img>');
            carPic.attr("src", results[k].images.fixed_height_still.url);
            carPic.attr("stateStill", results[k].images.fixed_height_still.url);
            carPic.attr("stateAnimated", results[k].images.fixed_height.url)
            carPic.attr("class", "pics");
        }

    })

})

    }






})