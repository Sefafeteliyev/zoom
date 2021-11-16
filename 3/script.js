$(function(){
    $('img').css( {
       "cursor" : "zoom-in"
    } );

 $('img').attr('alt', "Sekil");
 $('img').attr('title', "sekiler");
 
 $('#bg').css( {
    "width" : "100%",
    "height" : "100%",
    "background-repeat" : "no-repeat",
    "background-size" : "contain",
    "background-position" : "center",
    "position" : "fixed",
    "top" : 0,
    "left" : 0,
    'display' : "none",
    "background-color" : "rgba(0,0,0, 0.5)",
    "cursor" : "zoom-out"
} )
$('img').on('click', function(){
    let seklin  = $(this).attr('src');
    $('#bg').css({
        'background-image' : `url('${seklin}')`,
        'display' : "block"
       
    })
    })

    $("#bg").on('click', function(){
        $(this).css('display', "none");
    })
    $(function(){
        $('#icons').on('click', function(){
            $('#start').toggleClass('active');
            $(this).toggleClass('aktiv');
        })
    })
    
    
    
});