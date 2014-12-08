var $toTop = $('.toTop');

$(document).ready(function() {
    // scroll to top
    $(window).scroll(function() {
      if($(this).scrollTop() > 100){
        $toTop.stop().animate({
          top: '0px'
        }, 500);
      }
      else{
        $toTop.stop().animate({
         top: '-100px'
       }, 500);
      }
    });
    $toTop.click(function() {
      $('html, body').stop().animate({
       scrollTop: 0
     }, 500, function() {
       $toTop.stop().animate({
         top: '-100px'
       }, 500);
     });
    });

    // toggle navigation
    $('.nav-btn').click(function() {
      $('.nav').toggleClass('slide-out');
    });
    $('.popup').click(function(event) {
      var width  = 575,
      height = 400,
      left   = ($(window).width()  - width)  / 2,
      top    = ($(window).height() - height) / 2,
      url    = this.href,
      opts   = 'status=1' +
      ',width='  + width  +
      ',height=' + height +
      ',top='    + top    +
      ',left='   + left;

      window.open(url, 'twitter', opts);

      return false;
    });
  });

