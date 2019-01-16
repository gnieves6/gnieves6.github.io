$(document).ready(function(){

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

    $('.learnmore').click(function(){

        $('#learnmoretext').slideDown('300');
        $('.learnmore').hide();
    });

    $('a').click(function(event){
        event.preventDefault();
    });

});