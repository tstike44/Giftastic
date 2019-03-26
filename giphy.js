

$(document).ready(function () {
//store deafualt items on page load in this array
var animeArr = ['Sword Art Online', 'One Punch Man', 'Fairy Tail', 'Hi Score Girl', 'The Devil Is a Part-Timer!', 'Soul Eater', "Death Note", "Devilman Crybaby", "Blue Exorcist", "Kakegurui"];
//creates the buttons at the top of the page
    for (i = 0; i < animeArr.length; i++) {
        var arrayBtn = $("<button>");
        arrayBtn.addClass("gif-array-button");
        arrayBtn.text(animeArr[i]);
        $("#gif-buttons").append(arrayBtn)
    }
$("#submit").click(function(){
    var newBtn = $("<button>")
    var input = $('input').val();
    arrayBtn.attr('data-name')
    newBtn.append(input)
    $("#gif-buttons").append(newBtn);
})

$("#gif-buttons").click(function(){
var anime = $(this).attr("data-name");
var queryURL = "https://api.giphy.com/v1/gifs/search?&q="+ anime +"&limit=10&offset=0&lang=en&api_key=ovobMu0e9nWE7IM6EdMkjiLYqzi6rsjR";
 $.ajax({
        url: queryURL,
        method: "GET"
    }) 
    .then(function (response) {
        console.log(response)
        var results = response.data;

    for (i = 0; i < results.length; i++)  {
        var gifDiv = $("<div>");

        var rating = results[i].rating;
        
        var p = $("<p>").text("Rating: " + rating);
        
        var animeImage = $("<img>");
        
        animeImage.attr("src", results[i].images.fixed_height.url);
        console.log(results[i].images.fixed_height.url)
        gifDiv.prepend(p);
        gifDiv.prepend(animeImage);
        
        $("#gifs-show-here").prepend(gifDiv);
        }
             
    }) //end of ajax response
})//end of button click function
    $(".gif").on("click", function () {
            var state = $(this).attr("data-state");

            if (state == "still") {
                $(this).attr('src', $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
            } else {
                $(this).attr('src', $(this).attr("data-still"));
                $(this).attr("data-still", "still");
            }

        }) //end of motion click function
        
            
}); //end ready function
