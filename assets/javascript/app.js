$(document).ready(function () {

    // Initial array of movies
    var pics = [];

    // Function for dumping the JSON content for each button into the div
    function displayPicInfo() {

        var pic = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=DNz9vFegwkYmNtcTUIXy7ZYaJModyCRp&q=" + pic + "&limit=30&offset=0&rating=G&lang=en";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            $("#movies-view").text(JSON.stringify(response));
        });
    }

    // Function for displaying movie data
    function renderButtons() {

        // Deleting the buttons prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();

        // Looping through the array of movies
        for (var i = 0; i < pics.length; i++) {

            // Then dynamically generating buttons for each movie in the array
            // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
            var a = $("<button>");
            // Adding a class of movie to our button
            a.addClass("movie");
            // Adding a data-attribute
            a.attr("data-name", movies[i]);
            // Providing the initial button text
            a.text(movies[i]);
            // Adding the button to the buttons-view div
            $("#buttons-view").append(a);
        }
    }

    // This function handles events where one button is clicked
    $("#add-pic").on("click", function (event) {
        event.preventDefault();

        // This line grabs the input from the textbox
        var picSearch = $("#pic-input").val().trim();

        // Adding the movie from the textbox to our array
        pics.push(picSearch);
        console.log(picSearch);

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
    });

    // Function for displaying the movie info
    // Using $(document).on instead of $(".movie").on to add event listeners to dynamically generated elements
    $(document).on("click", ".pic", displayPicInfo);

    // Calling the renderButtons function to display the initial buttons
    renderButtons();

})