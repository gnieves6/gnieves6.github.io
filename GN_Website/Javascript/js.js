$(document).ready(function(){
    $('.readmore').hide();

    $('.readmore').click(function(){

    $('#show-this-on-click').slideDown('300');
    $('.readmore').hide();
    $('.readless').show();

});

    $('.readless').click(function(){

    $('#show-this-on-click').slideUp('300');
    $('.readmore').show();
    $('.readless').hide();

});

    // $('a').click(function(event){
    //     event.preventDefault();
    // });




});