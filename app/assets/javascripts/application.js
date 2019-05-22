// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks

//= require jquery 
//= require jquery_ujs
//= require jquery3

//= require bootstrap
//= require bootstrap-sprockets
//= require popper
//= require bootstrap-slider

//= require retina
//= require jquery.easing

//= require_tree .

$(function() {

  "use strict";

  /*===============================================
    Smooth Scrolling
  ===============================================*/
  var htmlBody = $("html,body");
  var smoothLinks = $(".nav-link");

  smoothLinks.on("click", function(e) {
      htmlBody.animate({scrollTop: $(this.hash).offset().top}, 700, "easeInOutQuart");  
    e.preventDefault();
  });

  /*===============================================
    Scroll Spy
  ===============================================*/
  $('body').scrollspy({ 
    target: '.nav',
    offset: 0
  });

});
