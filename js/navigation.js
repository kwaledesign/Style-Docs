(function() {

  // off-canvus annotation slide
  var $navSlider = $('.js-nav-slider'),
    $navLink = $('.js-nav-link'),
    //$main = $('.main');
 
  $navLink.on("click", function(){
    $navLink.toggleClass('is-active');
    $navSlide.toggleClass('is-active');
    //$main.toggleClass('is-slide');
    return false;
  });

})();
