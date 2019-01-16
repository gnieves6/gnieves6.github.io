//  write var for every city --- only using the capital lettered abbriviations
// remember for any Var --- it starts at 0 (so for 5 options the highest you will have is 
//  var[4];)

var city = ['NYC', 'SF', 'LA', 'ATX', 'SYD'];

$(document).ready(function(){

    // using append we put in all the city optiong (from the var) that correspond with 
    // an image for and city selected, from the drop down we change the background image
    // located in our css
    for(i=0; i<city.length; i++) {
        $('#city-type').append('<option value="' + city[i] + '">' + city[i] + '</option>');
    }

    // alert("hello")

    $('form').change('#city-type',function(){
        
        let userInput = $('#city-type').val();
    
        if(userInput === "NYC"){
            $('body').attr('class','nyc')
        } else if(userInput === "SF"){
            $('body').attr('class','sf')
        } else if(userInput === "LA"){
            $('body').attr('class','la')
        } else if(userInput === "ATX"){
            $('body').attr('class','austin')
        } else if (userInput === "SYD"){
            $('body').attr('class','sydney')
        } else alert('Sorry we dont have an image for your city just yet, stay tuned')
    
    });

});