$(document).ready(function () {
    const key = "DNz9vFegwkYmNtcTUIXy7ZYaJModyCRp"
    var cars = ["mustang", "corvette", "camaro", "wrangler", "f150"];

    //Display the default buttons on the page

    for (var i = 0; i < cars.length; i++) {
        var makeButtons =
            $('<button').text(cars[i]).addClass('onLoadButtons');
        makeButtons.attr("car-model", subject[i]);
        $('#buttons').append(makeButtons);
    };

    $(".onLoadButtons").on('click', function () {
        var carModel = $(this).attr('car-model');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + carModel + "&api_key=DNz9vFegwkYmNtcTUIXy7ZYaJModyCRp&limit=9";

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

                picDiv.prepend(p);
                picDiv.prepend(carPic);
                $('#carModel-view').prepend(picDiv);
            };

        })

    });

    $('#add-carModel').on("click", function () {

        event.preventDefault();
        var carModelInput = $("#carModel-input").toLowerCase().val().trim();

        var makeButtons = $('<button>').text(carModelInput);
        makeButtons.attr("car-model", carModelInput);
        makeButtons.attr("class", "newButton");
        $('#allButtons').append(makeButtons);
        $('#carModel-input').empty();

    })

})






