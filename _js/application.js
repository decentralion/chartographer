/*!
 * application.js - Chartographer.
 * Takashi Okamoto <tokamoto@palantir.com>
 *
 * Copyright 2014 Palantir Technologies.
 */

// Modernizr tests
Modernizr.addTest('retina', function() {
  if (window.matchMedia) {
    var mq = window.matchMedia("only screen and (-moz-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");
    return mq && mq.matches;
  }
});

(function(window, document, undefined) {
  'use strict';
  var $window = $(window);

  function animateToHash(hash) {
    // animate
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 200, function() {
      window.location.hash = hash;
    });
  }

  $(function() {
    $("#main-navigation ul.nav > li a[href^='#']").on('click', function(event) {
       event.preventDefault();
       animateToHash(this.hash);
    });

    $("main#main-content > section > header").stick_in_parent();
    // $("div.example-block").stick_in_parent({
    //   offset_top: 190
    // });

    // move to hash
    if (window.location.hash) {
      window.setTimeout(function() {
        animateToHash(window.location.hash)
      }, 10);
    }
  });
})(window, window.document);
