(function ($, window) {
  // Scroll to Top
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 70) {
      $('.sticky').addClass('fixed');
      $('.scroll-to-top').addClass('reveal');
    } else {
      $('.sticky').removeClass('fixed');
      $('.scroll-to-top').removeClass('reveal');
    }
  });
})(jQuery, window);
