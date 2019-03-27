

$(document).ready(function () {
//store deafualt items on page load in this array
var animeArr = ['Gun Gale Online', 'One Punch Man', 'Fairy Tail', 'Seven Deadly Sins', 'The Devil Is a Part-Timer!', 'Soul Eater', "Death Note", "Devilman Crybaby", "Blue Exorcist", "Kakegurui"];
//creates the buttons at the top of the page
    for (i = 0; i < animeArr.length; i++) {
        var arrayBtn = $("<button>");
        arrayBtn.addClass("gif-array-button");
        arrayBtn.attr('data-name',animeArr[i]);
        arrayBtn.text(animeArr[i]);
        $("#gif-buttons").append(arrayBtn)

    }
$('#submit').click(function(){
    var newBtn = $("<button>")
    var input = $('input').val().trim();
    newBtn.append(input)
    newBtn.attr('data-name',animeArr[i]);
    $("#gif-buttons").append(newBtn);
    console.log(newBtn)

})

$(document).on('click','.gif-array-button', function(){
var anime = $(this).attr("data-name");

var queryURL = "https://api.giphy.com/v1/gifs/search?&q="+ anime +"&limit=10&offset=0&lang=en&api_key=ovobMu0e9nWE7IM6EdMkjiLYqzi6rsjR";
 $.ajax({
        url: queryURL,
        method: "GET"
    }) 
    .then(function (response) {
        var results = response.data;
        console.log(response)

    for (i = 0; i < results.length; i++)  {
        var gifDiv = $("<div>");
        gifDiv.attr('id', 'gif-me')

        var rating = results[i].rating;
        console.log(rating)

        var p = $("<p>").text("Rating: " + rating);
        var imgRes = results[i].images.fixed_height.url;

        var animeImage = $("<img>");
        animeImage.attr("data-state", "still")
        animeImage.attr("src", imgRes);

        //console logging the images 
        console.log(imgRes)

        gifDiv.append(p);
        gifDiv.append(animeImage);
        
        $("#gif-show-here").append(gifDiv);
        console.log(gifDiv)
        }
             
            
    }) //end of ajax response
})//end of button click function

    $(document).on("click", "img", function () {
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
