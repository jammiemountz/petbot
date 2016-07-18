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

  var scrollIntervals = [
//scroll position   section class    class that cues animation
    [150,           '.summary-title',        'hideMe'],
    [200,           '.summary-body',         'hideMe'],
    [250,           '.pet-cat',               'hideMe'],
    [290,           '.pet-browndog',          'hideMe'],
    [330,           '.pet-greydog',           'hideMe'],
    [330,           '.petbot-svg-container', 'hideMe'],
    [900,          '.main-features',        'hideMe'],
    [1300,          '.secondary-features',   'hideMe']
  ]

  var scrollIntervalsMobile = [
//scroll position   section class    class that cues animation
    [0,            '.summary-title',         'hideMe'],
    [10,           '.summary-body',          'hideMe'],
    [50,           '.pet-cat',               'hideMe'],
    [70,           '.pet-browndog',          'hideMe'],
    [90,           '.pet-greydog',           'hideMe'],
    [250,          '.petbot-svg-container',  'hideMe'],
    [270,          '.main-features',         'hideMe'],
    [400,          '.secondary-features',    'hideMe']
  ]

  var itemArr = ['.wifi', '.body', '.camera', '.treat-dispenser']

  // hide all text boxes and opacity layers
  hide(itemArr);
  // call init to track scroll
  init();
  animateLeft('.your-petcam')
  animateRight('.their-smartphone')

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
  if ($(window).width() < 400) {
    console.log('got mobile')
    $.each(scrollIntervalsMobile, function(index, value){
      // if we're in the section
      if ( sy >= value[0] ) {
        // take off the 'hideMe class to reveal element'
        $(value[1]).removeClass( value[2] );
      }
      // else, if we are ABOVE it, add the hideMe class back in.
      else {
        $(value[1]).addClass( value[2] );
      }
    })
  } else {
    $.each(scrollIntervals, function(index, value){
      // if we're in the section
      if ( sy >= value[0] ) {
        // take off the 'hideMe class to reveal element'
        $(value[1]).removeClass( value[2] );
      }
      // else, if we are ABOVE it, add the hideMe class back in.
      else {
        $(value[1]).addClass( value[2] );
      }
    })
  }
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
