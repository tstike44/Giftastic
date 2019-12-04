$(document).ready(function () {
	//store deafualt items on page load in this array
	var animeArr = ['Gun Gale Online', 'One Punch Man', 'Fairy Tail', 'Seven Deadly Sins', 'The Devil Is a Part-Timer!', 'Soul Eater', "Death Note", "Devilman Crybaby", "Blue Exorcist", "Kakegurui"];

	//creates the buttons at the top of the page and assign attributes 
	for (i = 0; i < animeArr.length; i++) {
		var arrayBtn = $("<button>");
		arrayBtn.addClass("gif-array-button");
		arrayBtn.attr('data-name', animeArr[i]);
		arrayBtn.text(animeArr[i]);
		$("#gif-buttons").append(arrayBtn)
		$('#submit').click();
	}

	//when the submit button is clicked the newBtn is put into the array
	$(document).on('click', '#submit', function (event) {
		event.preventDefault();
		var input = $('input').val().trim();
		//new button that will be displayed 
		var newBtn = $("<button>")
		newBtn.attr('class', "gif-array-button")
		newBtn.attr('data-name', input)
		newBtn.append(input)
		$("#gif-buttons").append(newBtn);
		animeArr.push(input);
		//clear input field
		$("#search-here").val('');
	})
	
	const arrButton = $("#gir-array-button");

	//click function to hide old gifs
	$(document).on('click', arrButton, () => {
		const gifMe = $("#gif-me");
		gifMe.hide();
	})

	//click function to retrieve the gifs from the api
	$(document).on('click', '.gif-array-button', function () {
		var query = $(this).attr("data-name");
		//setting query params
		var queryURL = "https://api.giphy.com/v1/gifs/search?&q=" + query + "&limit=10&offset=0&lang=en&api_key=ovobMu0e9nWE7IM6EdMkjiLYqzi6rsjR";
		$.ajax({
			url: queryURL,
			method: "GET"
		})
			.then(function (response) {
				var results = response.data;
				for (i = 0; i < results.length; i++) {
					//creating divs for the gifs to lay in
					var gifRow = $("<div>")
					var gifDiv = $("<div>");

					//setting row class to better organize the gifs
					gifRow.attr('class', 'row')
					gifRow.attr('id', 'gif-row')

					//set the div for the gifs an id
					gifDiv.attr('id', 'gif-me')

					var title = results[i].title;

					var p = $("<p>").text("Title: " + title);

					//different image types..still and animated
					var imgPlay = results[i].images.fixed_height.url;
					var imgStill = results[i].images.fixed_height_still.url;

					//creating an img tag for the gif to be stored
					var animeImage = $("<img>");

					animeImage.attr("src", imgPlay);
					animeImage.attr("id", "gif-img");
					animeImage.attr("data-state", "still")

					//appending the image and the gif title
					gifDiv.append(animeImage);
					gifDiv.append(p);

					//setting the gifs to show in the div
					$("#gif-show-here").prepend(gifDiv);


				}
			}) //end of ajax response
	}) //end of button click function
}); //end ready function
