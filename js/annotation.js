(function() {

  // off-canvus annotation slide
  var $annotationSlider = $('.js-annotation-slider'),
    $annotationLink = $('.js-annotation-link'),
    //$main = $('.main');
 
  $annotationLink.on("click", function(){
    $annotationLink.toggleClass('is-active');
    $annotationSlide.toggleClass('is-active');
    //$main.toggleClass('is-slide');
    return false;
  });

})();
