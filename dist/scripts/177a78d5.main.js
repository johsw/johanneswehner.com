$(document).ready(function(){$welcome=$("#welcome"),welcomeShown=!0,$(window).scroll(function(){checkPosition()}),checkPosition=function(){margin=$(window).height()/3*2,$welcome.offset().top-$(window).scrollTop()-margin>0?welcomeShown||($("body").removeClass("welcome-hidden"),welcomeShown=!0):(welcomeShown&&($("body").addClass("welcome-hidden"),welcomeShown=!1),console.log("hide"))}});