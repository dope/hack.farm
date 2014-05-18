$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 100){
            $('.toTop').stop().animate({
                top: '0px'
                }, 500);
        }
        else{
            $('.toTop').stop().animate({
               top: '-100px'
            }, 500);
        }
    });
    $('.toTop').click(function() {
        $('html, body').stop().animate({
           scrollTop: 0
        }, 500, function() {
           $('.toTop').stop().animate({
               top: '-100px'
           }, 500);
        });
    });
});