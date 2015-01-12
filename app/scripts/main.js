$(document).ready(function() {
  $welcome = $('#welcome');
  welcomeShown = true;
  $( window ).scroll(function(e) {
    checkPosition();
  });
  checkPosition = function() {
    margin = ($(window).height()/3) * 2;
    if (($welcome.offset().top - $(window).scrollTop() - margin) > 0) {
      if (!welcomeShown) {
        $('body').removeClass('welcome-hidden');
        welcomeShown = true;
      }
    }
    else {
      if (welcomeShown) {
        $('body').addClass('welcome-hidden');
        welcomeShown = false;
      }
      console.log('hide');      
    }
  }
});
