// jshint devel:true
// $ =true

'use strict';

(function ($) {
  function headingSlide(sectionHeading) {
    TweenMax.from(sectionHeading, 0.5, {
      left: '-100%',
      delay: 0.2,
      ease: Power2.easeOut
    });
  }

  function arrowFadeIn(arrow) {
    TweenMax.from(arrow, 1, {
      opacity: 0,
      scale: 0.5,
      ease: Back.easeOut,
      delay: 0.2
    });
  }

  $('[data-nav="link"]').on('click', function () {
    var $this = $(this),
      href = $this.attr('href'); //

    headingSlide('.section-heading');
    arrowFadeIn('.fa-arrow-up')
  });

//Logo slide in from left
  TweenMax.from('.logo', 1, {
    left: '-100%',
    ease: Back.easeInOut.config(0.5)
  });

//Nav stagger slide in from right
  TweenMax.staggerFrom('.primary-nav-list-item', 0.4, {
    right: '-100%',
    delay: 0.8,
    ease: Expo.easeInOut
  }, 0.1);

//About content slide up
  $('.about-link').on('click', function () {
    TweenMax.from('.about-description', 1, {
      bottom: -1000,
      delay: 0.1,
      ease: Back.easeInOut.config(1)
    });
  });

//Project examples stagger
  $('.work-link').on('click', function () {
    TweenMax.staggerFrom('.work-example', 0.5, {
      scale: 0.5,
      opacity: 0,
      delay: 0.5,
      ease: Back.easeOut
    }, 0.2);
  });

//Resume description slide in from right
  $('.resume-link').on('click', function () {
    TweenMax.from('.resume-description', 1, {
      right: '-100%',
      delay: 0.2,
      ease: Expo.easeInOut
    })
  });

  $('.contact-link').on('click', function () {
    TweenMax.from('.contact-secondary-heading', 0.5, {
      opacity: 0,
      scale: 1.25,
      delay: 0.6,
      ease: Back.easeInOut.config(0.5)
    });

    TweenMax.from('.icon', 0.5, {
      opacity: 0,
      rotation: -90,
      delay: 1
    });

    TweenMax.from('.phone-email-text', 0.2, {
      opacity: 0,
      y: 30,
      delay: 1.4
    })
  });

//Up arrow scroll to top
  $('.fa-arrow-up').on('click', function () {
    TweenMax.to(window, 0.75, {
      scrollTo: {y: 0},
      ease: Expo.easeInOut
    });
  });
})(jQuery);
