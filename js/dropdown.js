var dropdown = function() {
  var defaults = {
    dropdownContainer: '.js-dropdown',
  };
  return {
    init: function (configuration) {
      if(typeof configuration === 'undefined')
      configuration = {};
      config = $.extend(true, defaults, configuration);
      dropdown.showHideDropdown();
    },
    showHideDropdown: function() {
      $(".custom-dropdown").click(function(e) {
          e.preventDefault();
          $('.dropdown-container').removeClass('active');
          $('.dropdown-container',$(this)).toggleClass('active');
      });
    },
    updateValue: function() {

    }
  };
}();

