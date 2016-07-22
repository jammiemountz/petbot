$( document ).ready(function() {

  // Set some variables

  var docElem = document.documentElement;
  var didScroll = false;

  $(".various").fancybox({
  		maxWidth	: 800,
  		maxHeight	: 600,
  		fitToView	: false,
  		width		: '70%',
  		height		: '70%',
  		autoSize	: false,
  		closeClick	: false,
  		openEffect	: 'none',
  		closeEffect	: 'none'
  	});

  var animateFadeIn = [
    '.pet-brown-dog',
    '.summary-title',
    '.summary-body',
    '.pet-cat',
    '.explore-title',
    '.petbot-explore-svg',
    '.revolutionary-features-title',
    '.ios-app-container',
    '.treats-container',
    '.selfie-container',
    '.secondary-features',
    '.video-title',
    '.video-our-story',
    '.video-our-customers',
    '.pet-grey-dog'
  ]

  $('.play-video').removeClass( 'hideMe' );

  $.each(animateFadeIn, function(index, item){
    $(item).addClass('animate-in-transition hideMe')
  })

  $.each(animateFadeIn, function(index, item){
    console.log($(item).offset().top)
  })

  var itemArr = ['.wifi', '.body', '.camera', '.treat-dispenser']

  // hide all text boxes and opacity layers
  hide(itemArr);
  // call init to track scroll
  init();
  animateLeft('.your-petcam')
  animateRight('.their-smartphone')
  animateIn('.pet-brown-dog', '.summary-title'),

  $.each(itemArr, function(index, item){
    $(item + '-trigger').on('mouseover', function(){
      hide(['.wifi', '.body', '.camera', '.treat-dispenser']);
      $(item).attr('opacity', '.5');
      $(item + '-desc').attr('opacity', '.5');
    })
    $(item + '-trigger').on('mouseout', function(){
      hide(['.wifi', '.body', '.camera', '.treat-dispenser']);
    })
  })


function hide (arr) {
  $.each(arr, function(index, item) {
    $(item).attr('opacity', '0');
    $(item + '-desc').attr('opacity', '0');
  })
}

function init() {
  // register a function on the scroll event
  window.addEventListener( 'scroll', function( event ) {
    // simple way to throttle the scroll event
    if( !didScroll ) {
      didScroll = true;
      setTimeout( scrollPage, 250 );
    }
  }, false );
}

function scrollPage() {
  var sy = scrollY();
  // console.log($(window).width())
  // for each item in scrollInterval arrays,
  $.each(animateFadeIn, function(index, item){
    // if we're in the section
    if ( sy >= $(item).offset().top - window.innerHeight ) {
      // take off the 'hideMe class to reveal element'
      $(item).removeClass( 'hideMe' );
    }
    // else, if we are ABOVE it, add the hideMe class back in.
    else {
      $(item).addClass( 'hideMe' );
    }
  })
  didScroll = false;
}

function animateIn(element) {
  $(element).removeClass('hideMe')
}

function animateLeft(element) {
  $(element).removeClass('hideMe-left')
}

function animateRight(element) {
  $(element).removeClass('hideMe-right')
}

function scrollY() {
  // returns the offset of the scroll
  return window.pageYOffset || docElem.scrollTop;
}

});
