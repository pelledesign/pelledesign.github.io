/*! jQuery Scroll Snap 1.0.0 | MIT *
 * https://github.com/jpcurrier/jquery-scroll-snap !*/
  
( function( $ ){
  $.fn.scrollSnap = function( options ){

    // default options
    var settings = $.extend({
      speed: 400
    }, options );

    var scrollStop,
      lastScrollTop =
        window.pageYOffset ||
          document.documentElement.scrollTop ||
            document.body.scrollTop ||
              0;

    function snapScroll( $snap, scroll, direction ){
      if( $( 'body' ).hasClass( 'lock-scroll' ) )
        return;

      var windowHeight = $( window ).height();
      direction = typeof direction !== 'undefined' ? direction : 'up';

      var scrollTo = false;
      $snap.each( function(){
        if( 
          scroll <= $( this ).offset().top  && ( // if this scroll position is between top and this snap containers top position and..
            // advance
            ( direction == 'down' && scroll >= $( this ).offset().top - ( windowHeight * 1 / 5 ) ) || // direction is 'down' and you scrolled to closer than 1/3 of the window height to ABOVE (snap-down)this to snap containers or..
            // stabilize
            ( direction == 'up' && scroll >= $( this ).offset().top - ( windowHeight * 1 / 5 ) ) // direction is 'up' and you scrolled to closer than 1/3 of the window height to BELOW (snap-up )this to snap containers or..
          ) || // or 
          scroll >= $( this ).offset().top && ( // if this scroll position is below this snap containers top position and..
            // advance
            ( direction == 'up' && scroll <= $( this ).offset().top + ( windowHeight * 1 / 5 )) || // direction is 'up' and you scrolled to closer than 1/3 of the window height to BELOW (snap-up)this to snap containers or..
            // stabilize
            ( direction == 'down' && scroll <= $( this ).offset().top + ( windowHeight * 1 / 5 ) )
          )
        ){
          $( 'body:not( .lock-scroll )' ).addClass( 'lock-scroll' );
          scrollTo = $( this ).offset().top; //position it will scroll to
			 test = scrollTo;			 
			 
        }
      } );

      if( scrollTo !== false ){
        $( 'html, body' ).animate(
          { scrollTop: scrollTo },
          settings.speed,
          function(){
            $( 'body.lock-scroll' ).removeClass( 'lock-scroll' );
				console.log(direction);	// checking direction when snapping
				if ((direction == 'up') && (scrollTo > 500)) {$('header').removeClass('nav-down').addClass('nav-up');
				}
          }
        );
      }
    }

    var $snap = this;
    $( window ).on( 'scroll', function(){
      var scroll =
        window.pageYOffset ||
          document.documentElement.scrollTop ||
            document.body.scrollTop ||
              0;

			var direction = 'up';
      if( scroll > lastScrollTop )
        direction = 'down';
		console.log(direction); //continously checking up or down scroll 
			if ((direction == 'down') && (scrollTo > 50)) {
					$('header').removeClass('nav-down').addClass('nav-up')
					}
			else if (direction == 'up'){
			$('header').removeClass('nav-up').addClass('nav-down')	
			}
		

      lastScrollTop = scroll;

      clearTimeout( scrollStop );
      scrollStop = setTimeout( function(){
        snapScroll( $snap, scroll, direction );
		//console.log(test);
		//if (test > 1000) {$('header').removeClass('nav-down').addClass('nav-up');}
      }, 200 );
    } );
  };
} )( jQuery );