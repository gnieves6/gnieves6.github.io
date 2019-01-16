$(document).ready(function(){


//start with citipix skyline


//when user submits one of the following display corresponding image 
// (as shown below)

// if input equals "New York" or "New York City" or "NYC" 
    // then make the background of the page nyc.jpg
// if input equals "San Francisco" or "SF" or "Bay Area" 
    // then make the background of the page sf.jpg
// if input equals "Los Angeles" or "LA" or "LAX" 
    // then make the background of the page la.jpg
// if input equals "Austin" or "ATX" 
    // then make the background of the page austin.jpg
// if input equals "Sydney" or "SYD" 
    // then make the background of the page sydney.jpg
//  if input is not defined above 
    //  then revert back to citipix skyline with message saying 
    //  "sorry we dont have an image for your city just yet, stay tuned"



$('form').submit(function(){
    event.preventDefault();

    let userInput = $('#city-type').val();

    if(userInput === "New York" || userInput === "New York City" || userInput === "NYC"){
        $('body').attr('class','nyc')
    } else if(userInput === "San Fransisco" || userInput === "SF" || userInput === "Bay Area"){
        $('body').attr('class','sf')
    } else if(userInput === "Los Angeles" || userInput === "LA" || userInput === "LAX"){
        $('body').attr('class','la')
    } else if(userInput === "Austin" || userInput === "ATX"){
        $('body').attr('class','austin')
    } else if (userInput === "Sydney" || userInput === "SYD"){
        $('body').attr('class','sydney')
    } else alert('Sorry we dont have an image for your city just yet, stay tuned')

$('#city-type').val('');



});

});