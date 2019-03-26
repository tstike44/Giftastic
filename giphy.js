//store deafualt items on page load in this array
var animeArr = ['Sword Art Online', 'One Punch Man', 'Fairy Tail', 'Hi Score Girl', 'The Devil Is a Part-Timer!', 'Soul Eater', "Death Note", "Devilman Crybaby", "Blue Exorcist", "Kakegurui"];

$(document).ready(function () {

    for (i = 0; i < animeArr.length; i++) {
        var arrayBtn = $("<button>");
        arrayBtn.addClass("gif-array-button");
        arrayBtn.text(animeArr[i]);
        $("#gif-buttons").append(arrayBtn)
    }
$("#submit").click(function(){
    var newBtn = $("<button>")
    var input = $('input').val();
    newBtn.append(input)
    $("#gif-buttons").append(newBtn);
})


}); //end ready function
