/**
 * jquery.hint.js
 *
 * @description jQuery Hint Plugin
 * @version     0.2.1
 * @author      Archer Hsieh
 * @date        2014/04/21
 *
 * @copyright Copyright 2013 Archer Hsieh, all rights reserved.
 */
 
(function($) {
  
  var methods = {
    init: function (options) {
    
	/* 預設參數 */
	var defaults = {
    hintClass: ""
	};
  
	var callback = $.extend({
	    onFocus: function() {},
	    onBlur: function() {}
	}, arguments[0] || {});
	
	var _options = $.extend({}, defaults, options);
	
		return this.each(function(e) {
      var obj = $(this);
      var hint = $(this).attr('hint');
      if (obj.is( ":text" ) || obj.is( "textarea" )) {
        if (typeof hint !== 'undefined' && hint !== false) {
          var _hint = hint;

          obj.bind("focus", function(e) {
            callback.onFocus.call(this, e);
            var val = $(this).val();
            if (val.escapeBLtoN() == _hint.escapeBLtoN()) {
              $(this).removeClass(_options.hintClass);
              $(this).val("");
            }
          });
        
          obj.bind("blur", function(e) {
            callback.onBlur.call(this, e);
            if ($(this).val() == "") {
              var title = _hint.escapeBLtoN();
              $(this).addClass(_options.hintClass);
              $(this).val(title);
            }
          });
          
          obj.trigger("blur");
        }
      }
		});
	}
  };
  
  $(document).delegate('form', 'submit', function() {
    $("input,textarea").each(function() {
      var hint = $(this).attr('hint');
      if (typeof hint !== 'undefined' && hint !== false) {
        if ($(this).val().escapeBLtoN() == hint.escapeBLtoN()) {
          $(this).val("");
        }
      }
    });
  });
  
  String.prototype.escapeBLtoN = function() {
    return this.replace(/(\r\n|\n|\r|\\n)/igm, "\n");
  }
  
  $.fn.hint = function(methodOrOptions) {
      if ( methods[methodOrOptions] ) { //excute option
          return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
      } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) { //init
          return methods.init.apply( this, arguments );
      } else {
          $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.hint' );
      }   
  };
    
})(jQuery);