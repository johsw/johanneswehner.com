var welcomeElement;
var welcomeShown;
var margin = window.innerHeight * 0.10;

var init = function() {
  welcomeElement = document.getElementById('welcome');
  welcomeShown = true;
  window.onscroll = checkPosition;
}

var checkPosition = function() {

  var rectangle = welcomeElement.getBoundingClientRect();
  var welcomeOffset = rectangle.top;

  var scrollPos = document.body.scrollTop;

  if ((welcomeOffset - scrollPos - margin) > 0) {

    if (!welcomeShown) {
      document.body.classList.remove('welcome-hidden')
      welcomeShown = true;
    }
  }
  else {
    if (welcomeShown) {
      document.body.classList.add('welcome-hidden')
      welcomeShown = false;
    }
  }
}

document.addEventListener('DOMContentLoaded', init());

