var $toTop = $('.toTop');

<<<<<<< HEAD
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

=======
$(document).ready(function () {
    // scroll to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $toTop.stop().animate({
                top: '0px'
            }, 500);
        } else {
            $toTop.stop().animate({
                top: '-100px'
            }, 500);
        }
    });
    $toTop.click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 500, function () {
            $toTop.stop().animate({
                top: '-100px'
            }, 500);
        });
    });

    // toggle navigation
    $('.nav-btn').click(function () {
        $('.nav').toggleClass('slide-out');
    });

    // social pop up
    $('.popup').click(function (event) {
        var width = 575,
            height = 400,
            left = ($(window).width() - width) / 2,
            top = ($(window).height() - height) / 2,
            url = this.href,
            opts = 'status=1' +
                ',width=' + width +
                ',height=' + height +
                ',top=' + top +
                ',left=' + left;

        window.open(url, 'twitter', opts);

        return false;
    });
});
>>>>>>> db9e96f325abf47c4b91e06a2f8ad7bb0f4e2ecb
