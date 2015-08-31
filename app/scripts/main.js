// jshint devel:true

$(document).ready(function () {
  //Slide nav list items from primary nav in from the right or bottom on load

  //Slide nav list banners on sections from left on scroll

  //Smooth scroll and stop at each section

  //$('.primary-nav-list-item').animate({ right: 0 });


});

function headingSlide(sectionHeading) {
  TweenMax.from(sectionHeading, 0.5, {
    left: '-100%',
    delay: 0.2,
    ease: Power2.easeOut
  });
}

$('[data-nav="link"]').on('click', function () {
  var $this = $(this),
    href = $this.attr('href'); //

  headingSlide('.section-heading');
});

//Nav stagger slide in from right
TweenMax.staggerFrom('.primary-nav-list-item', 0.4, {
  right: '-100%',
  delay: 0.2,
  ease: Power2.easeInOut
}, 0.1);

//About content slide up
$('.about-link').on('click', function () {
  TweenMax.from('.about-description', 1, {
    bottom: -1000,
    delay: 0.1,
    ease: Back.easeInOut.config(1)
  });
});

//Project examples stagger scale
$('.work-link').on('click', function () {
  TweenMax.staggerFrom('.work-example', 0.5, {
    scale: 0.5,
    opacity: 0,
    delay: 0.3,
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
