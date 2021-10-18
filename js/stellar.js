

(function($) {
	
  var siteStellar = function () {
    $(window).stellar({
      responsive: false,
      parallaxBackgrounds: true,
      parallaxElements: true,
      horizontalScrolling: false,
      hideDistantElements: false,
      scrollProperty: 'scroll'
    });
  };
  siteStellar();

	var contentWayPoint = function() {
		var i = 0;
		$('.element-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('element-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .element-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn element-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft element-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight element-animated');
							} else if ( effect === 'flipInX') {
								el.addClass('flipInX element-animated');
/* 							} else if ( effect === 'flipInY') {
								el.addClass('flipInY element-animated'); */
							} else if ( effect === 'zoomIn') {
								el.addClass('zoomIn element-animated');
							} else if ( effect === 'flip') {
								el.addClass('flip element-animated');								
							} else {
								el.addClass('fadeInUp element-animated');
							}
							el.removeClass('item-animate');
						},  k * 100);
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );

//		Bounce In New		

		$('.bounce-in').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('element-animated')) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){
					$('body .bounce-in.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.removeClass('invisible');
							el.addClass('bounceIn element-animated');							
							el.removeClass('item-animate');
						},  k * 100);
					});					
				}, 100);				
			}
		} , { offset: '95%' } );


//		fade in		

		$('.fade-in').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('element-animated')) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){
					$('body .fade-in.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.removeClass('invisible');
							el.addClass('fadeIn element-animated');							
							el.removeClass('item-animate');
							 el.closest("div").removeClass('loader');
						},  k * 100);
					});					
				}, 100);				
			}
		} , { offset: '75%' } );
		//default 45%
		
//		fade in down

		$('.fade-in-down').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('element-animated')) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){
					$('body .fade-in-down.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
								el.addClass('fadeInDown element-animated');							
							el.removeClass('item-animate');
						},  k * 100);
					});					
				}, 100);				
			}
		} , { offset: '95%' } );

//		fade in up

		$('.fade-in-up').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('element-animated')) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){
					$('body .fade-in-up.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.removeClass('invisible');
							el.addClass('fadeInUp element-animated');							
							el.removeClass('item-animate');
						},  k * 100);
					});					
				}, 100);				
			}
		} , { offset: '95%' } );	
		
		//		fade in left

		$('.fade-in-left').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('element-animated')) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){
					$('body .fade-in-left.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.removeClass('invisible');
							el.addClass('fadeInLeft element-animated');							
							el.removeClass('item-animate');
						},  k * 100);
					});					
				}, 100);				
			}
		} , { offset: '95%' } );

		$('.fade-in-right').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('element-animated')) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){
					$('body .fade-in-right.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.removeClass('invisible');
							el.addClass('fadeInRight element-animated');							
							el.removeClass('item-animate');
						},  k * 100);
					});					
				}, 100);				
			}
		} , { offset: '75%' } );		
		
//		flip in Y		

		$('.flip-in-y').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('element-animated')) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){
					$('body .flip-in-y.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.removeClass('invisible');
							el.addClass('flipInY element-animated');							
							el.removeClass('item-animate');
							el.removeClass('flipInY element-animated'); //added
						},  k * 100);
					});					
				}, 100);				
			}
		} , { offset: '75%' } );

//		zoom in 		

		$('.zoom-in').waypoint( function( direction ) {
			


			if( direction === 'down' && !$(this.element).hasClass('element-animated')) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){
					$('body .zoom-in.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.removeClass('invisible');
							el.addClass('zoomIn element-animated');							
							el.removeClass('item-animate');
						},  k * 100);
					});					
				}, 100);				
			}
		} , { offset: '10%' } );
		
		//		zoom in large 		

		$('.zoom-in-large').waypoint( function( direction ) {
			


			if( direction === 'down' && !$(this.element).hasClass('element-animated')) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){
					$('body .zoom-in-large.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.removeClass('invisible');
							el.addClass('zoomInLarge element-animated');							
							el.removeClass('item-animate');
						},  k * 100);
					});					
				}, 100);				
			}
		} , { offset: '40%' } );
		
//		Slide In Up		

		$('.slide-in-up').waypoint( function() {
						
				$(this.element).addClass('item-animate');
				
				setTimeout(function(){
					$('body .slide-in-up.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.removeClass('invisible');
							el.addClass('slideInUp element-animated');							
							el.removeClass('item-animate');
						},  k * 100);
					});					
				}, 100);					
		} , { offset: '85%' } );	

//		Flip		

		$('.flip').waypoint( function() {
						
				$(this.element).addClass('item-animate');
				
				setTimeout(function(){
					$('body .flip.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.removeClass('invisible');
							el.addClass('flip element-animated');							
							el.removeClass('item-animate');
						},  k * 100);
					});					
				}, 100);					
		} , { offset: '85%' } );
		
		//		Rotate In		

		$('.rotate-in').waypoint( function() {
						
				$(this.element).addClass('item-animate');
				
				setTimeout(function(){
					$('body .rotate-in.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.removeClass('invisible');
							el.addClass('rotateIn element-animated');							
							el.removeClass('item-animate');
						},  k * 100);
					});					
				}, 100);					
		} , { offset: '55%' } );
		
		
			
	};
	contentWayPoint();

})(jQuery);

/* (function($) {



  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

var win = $(window);

var allMods = $(".module");

allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

win.scroll(function(event) {
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
  
}); */