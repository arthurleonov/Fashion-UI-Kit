
var slider = function() {
  var defaults = {
    sliderContainer: '.js-slider-container',
    slides: '.js-slide',
    delayTime: 7000,
    animationSpeed: 300,
  };
  var currentSlide = 0;
  return {
    init: function (configuration) {
      if(typeof configuration === 'undefined')
      configuration = {};
      config = $.extend(true, defaults, configuration);
      slider.startSlider();
      slider.slideNav();
    },
    startSlider: function() {

      $(defaults.slides).nextAll().hide(); 

      var delay = setInterval(slider.nextSlide,defaults.delayTime);

      $(defaults.sliderContainer).mouseenter(
        function(){
          clearInterval(delay);
          console.log("I've stopped!")
        }
      ).mouseleave(
        function() {
          delay = setInterval(slider.nextSlide,defaults.delayTime);
          console.log("I've resumed!")
        }
      );
    },
    prevSlide: function () {

        $(defaults.slides).eq(currentSlide).fadeOut(defaults.animationSpeed);

        if (currentSlide > 0) { // update the current slide
          currentSlide--;
          console.log(currentSlide);
        }
        else {
          currentSlide = $(defaults.slides).length - 1;
          console.log(currentSlide);
        }  // go back to 0 in the end

        $(defaults.slides).eq(currentSlide).fadeIn(defaults.animationSpeed);

    },
    nextSlide: function () {

        $(defaults.slides).eq(currentSlide).fadeOut(defaults.animationSpeed);

  
        if (currentSlide < $(defaults.slides).length - 1) { // update the current slide
          currentSlide++;
          console.log(currentSlide);
        }
        else {
          currentSlide = 0;
          console.log(currentSlide);
        }  // go back to 0 in the end

        $(defaults.slides).eq(currentSlide).fadeIn(defaults.animationSpeed);

    },
    slideNav: function() {

      $('.next').on('click', function() {
        slider.nextSlide();
      });
      $('.prev').on('click', function() {
        slider.prevSlide();
      });
      
    },
  };
}();


// 1. the slider needs to toggle through images [DONE]
// 1.1 the slider needs to stop on hover [DONE]
// 2. the toggle needs to have a nice sliding animation [DONE]
// 3. there should be a thumbnail below that updates itself as the the slide toggles
// 4. we should have arrows that allows to toggle the slid left and right [DONE]