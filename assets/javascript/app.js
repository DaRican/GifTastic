$(document).ready(function () {
    const key = "DNz9vFegwkYmNtcTUIXy7ZYaJModyCRp"
    var cars = ["mustang", "corvette", "camaro", "wrangler", "f150"];

    //Display the default buttons on the page

    for (var i = 0; i < cars.length; i++) {
        var makeButtons = $('<button>').text(cars[i]).addClass('onLoadButtons');
        makeButtons.attr("car-model", cars[i]);
        $('#buttons-view').append(makeButtons);
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
                carPic.attr("srcStill", results[k].images.fixed_height_still.url);
                carPic.attr("srcAnimated", results[k].images.fixed_height.url)
                carPic.attr("class", "pics");
                carPic.attr("animateState", 'still');

                picDiv.prepend(p);
                picDiv.prepend(carPic);
                $('#carModel-view').prepend(picDiv);
            };

        })

    });

    $('#add-carModel').on("click", function () {

        event.preventDefault();
        var carModelInput = $("#carModel-input").val().trim().toLowerCase();

        var makeButtons = $('<button>').text(carModelInput);
        makeButtons.attr("car-model", carModelInput);
        makeButtons.attr("class", "newButton");
        $('#allButtons').append(makeButtons);
        $('#carModel-input').empty();

    });

    $(document).on('click', ".pic", function () {

        var state = $(this).attr("animateState");

        if (state = "still") {
            $(this).attr("src", $(this).attr("srcAnimated"));
            console.log("State: " + state);
            $(this).attr("animateState", "animated");
        } else {
            $(this).attr("src", $(this).attr("srcStill"));
            console.log("State: " + state);
            $(this).attr("animateState", "still");
        }


    })



})






