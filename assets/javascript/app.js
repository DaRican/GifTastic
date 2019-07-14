$(document).ready(function () {

    var cartoons = ["The Simpsons", "Darkwing Duck", "Talespin", "Ducktales"];

    function displayCartoonGifs() {
        var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=DNz9vFegwkYmNtcTUIXy7ZYaJModyCRp&q=" + cartoons + "&limit=25&offset=0&rating=G&lang=en"

        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function (response) {

            var cartoonDiv = $('')

        })


    }






})