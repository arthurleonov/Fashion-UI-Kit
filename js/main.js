var UikitMenu = function() {
  return {
    init: function() {
      // UikitMenu.fadeInDown();
      UikitMenu.menuDropdown();
      UikitMenu.relatedProduct();
    },
    menuDropdown: function () { // function used to delay the bootsrap dropdown so the reverse animation could run in the menu
        var tl = new TimelineLite();
        $('.dropdown').on('show.bs.dropdown', function (e) {
            $(this).find('.dropdown-menu').first().stop(true, true).fadeIn(400);
            tl.from(".items", 0.3, {autoAlpa:0})
            .staggerFrom(".textBlock", 0.5, {y: -50, autoAlpha:0, force3D:true}, 0.2, "-=0.3");
            // test what happens when click on the menu link many times
        });

        $('.dropdown').on('hide.bs.dropdown', function (e) {
            $(this).find('.dropdown-menu').first().stop(true, true).fadeOut(100);
        });
    },
    relatedProduct: function () {
      $('.gradient').hover(function(e) {
           $(this).find('.caption').addClass('hover');
           $(this).find('img').addClass('hover')
            }, function(){
               $(this).find('.caption').removeClass('hover');
               $(this).find('img').removeClass('hover')
      });
    }
  };
}();


