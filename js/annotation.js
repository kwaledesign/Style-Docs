(function() {

  // off-canvus annotation slider 
  var $annotationSlider = $('.annotation--slider'),
    $annotationLink = $('.annotation-link'),
    $page = $('.page');
 
  $annotationLink.on("click", function(){
    $annotationLink.toggleClass('is-active');
    $annotationSlider.toggleClass('is-active');
    $page.toggleClass('is-slide');
    return false;
  });

})();
