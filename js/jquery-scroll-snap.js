/*! jQuery Scroll Snap 1.0.0 | MIT *
 * https://github.com/jpcurrier/jquery-scroll-snap !*/
 
 $('#header, #header-mobile').addClass('auto-hide-header'); 


//detect user interaction
var touchStatus = "";
$('body').on('touchstart',function(){
	touchStatus = 'pressing';
	//console.log('touchstart');		
	});
	$('body').on('touchend',function (){
	touchStatus = 'released';
	//console.log('touchend');			
	});	
	
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

/*--------------------------	start snapScroll	------------------------------- */
    function snapScroll( $snap, scroll, direction ){
      if( $( 'body' ).hasClass( 'lock-scroll' ) )
        return;

      var windowHeight = $( window ).height();
      var windowWidth = $( window ).width();
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
			var this_height = $(this).height(); // get height of this element
			var centeringSpace = (windowHeight - this_height) / 2; // get the space needed to center it on screen
			var scrollToMiddle = $( this ).offset().top - centeringSpace;
			//alert(windowWidth);
			if((is_touch_device()) && (windowHeight > windowWidth) && (windowWidth < 576)) { //if touch device & orientation is portrait and screen width is less xs
			scrollTo = $( this ).offset().top; //position it will scroll to - top of element	
			}
			else if (windowWidth > windowHeight) {
			scrollTo = scrollToMiddle; //position it will scroll to - center of element	
			}
			if(!is_touch_device()) {		
			$( 'body:not( .lock-scroll )' ).addClass( 'lock-scroll' ); // will stop user from interacting while snapScroll animates, but also prohibits user from touchstart = only lock body for desktop		 					 
         }
		  }
      } );

      if( (scrollTo !== false) && (touchStatus !== 'pressing')){
			//console.log(touchStatus);
        $( 'html, body' ).stop().animate( //added stop 
          { scrollTop: scrollTo },
          settings.speed,
          function(){
            $( 'body.lock-scroll' ).removeClass( 'lock-scroll' );
				//console.log(direction);	// checking direction when snapping
				if ((direction == 'up') && (scrollTo > 500)) {
				//$('header').removeClass('nav-down').addClass('nav-up');
				$('header').removeClass('nav-down').addClass('nav-up');
				}
          }
        );
		//stop animation on touchstart & touchmove - added by me		
		$("body,html").bind("touchstart touchmove", function(e){
			 $("html,body").stop();
		});  		  
      }
    }
	 

	 
/*--------------------------	start scroll register	------------------------------- */
    var $snap = this;
    $( window ).on( 'scroll', function(){
      var scroll =
        window.pageYOffset ||
          document.documentElement.scrollTop ||
            document.body.scrollTop ||
              0;
		
		var direction = 'up';
      if( scroll > lastScrollTop ) {
			direction = 'down';
			//console.log(direction); //continously checking up or down scroll 
			//$('header').removeClass('nav-down').addClass('nav-up')
		}
		else if ( scroll < lastScrollTop ){
			//console.log(direction); 
			//$('header').removeClass('nav-up').addClass('nav-down')	
			}			
			
      lastScrollTop = scroll;
		
      clearTimeout( scrollStop );
		//touchStatus = 'pressning';
			//console.log(touchStatus);
      scrollStop = setTimeout( function(){
        snapScroll( $snap, scroll, direction ); 
      }, 600 ); // time to start of scroll 		
    } );
  };
} )( jQuery );