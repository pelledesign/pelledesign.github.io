/*! jQuery Scroll Snap 1.0.0 | MIT *
 * https://github.com/jpcurrier/jquery-scroll-snap !*/
 
var isSnapping = false; 
 
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
          scroll <= $( this ).offset().top && (
            // advance
            ( direction == 'down' && scroll >= $( this ).offset().top - ( windowHeight * 2 / 3 ) ) ||
            // stabilize
            ( direction == 'up' && scroll >= $( this ).offset().top - ( windowHeight / 3 ) )
          ) ||
          scroll >= $( this ).offset().top && (
            // advance
            ( direction == 'up' && scroll <= $( this ).offset().top + ( windowHeight * 2 / 3 ) ) ||
            // stabilize
            ( direction == 'down' && scroll <= $( this ).offset().top + ( windowHeight / 3 ) )
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
				if ((direction == 'up') && (scrollTo > 1000)) {$('header').removeClass('nav-down').addClass('nav-up');
				}
/* 				else if (direction == 'down') {
					$('header').removeClass('nav-up').addClass('nav-down')
					} */
            /*setTimeout( function(){
              $( 'body.lock-scroll' ).removeClass( 'lock-scroll' );
            }, 600 );*/
          }
        );
		  //var isSnapping = true;
/* 			console.log(isSnapping);
			console.log(direction); */
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
			if (direction == 'down') {
					$('header').removeClass('nav-down').addClass('nav-up')
					}
			else {
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