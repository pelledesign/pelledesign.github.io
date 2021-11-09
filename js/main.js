(function($) {


	'use strict';

	// bootstrap dropdown hover

  // loader
  var loader = function() {
    setTimeout(function() { 
      if($('#loader').length > 0) {
        $('#loader').removeClass('show');
      }
    }, 1);
  };
  loader();

/* header */
	
	/* $('nav .dropdown').hover(function(){
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			$this.find('.dropdown-menu').removeClass('show');
	}); */

/* hide expanded menu on body and header links click*/
$('body').on('click', ":not(header, header *)", function(){
	$('.navbar-collapse').removeClass('show');
	  if ($('.navbar-toggler').hasClass('open')) {
		  $('.navbar-toggler').removeClass('open').addClass('collapsed');
	  }	
	//$('.navbar-toggler collapsed').removeClass('show');
});

$('header a.nav-link').on('click',  function(){
	$('.navbar-collapse').removeClass('show');
	$('.navbar-toggler').removeClass('open').addClass('collapsed');
});

var
hero_slider  = $('#hero-slider'),
about_slider  = $('#about-slider'),
about_slider_mobile  = $('#about-slider-mobile'),
converse_more  = $('#converse-more'),
converse_gallery  = $('#converse-gallery'),
converse_cmf  = $('#converse-cmf'),
akg_more  = $('#akg-more'),
akg_gallery  = $('#akg-gallery'),
poc_more = $('#poc-more'),
spotify_more  = $('#spotify-more'),
bagheera_more  = $('#bagheera-more'),
mixed_more  = $('#mixed-more'),
mixed  = $('#mixed'),
specialized_more  = $('#specialized-more'),
belmar_more  = $('#belmar-more'),
design_process  = $('#design-process'),
reviews  = $('#reviews'),
apa = design_process + $('#design-process'),
all_sliders = $('#hero-slider, #about-slider, #akg-more, #converse-more, #converse-gallery, #converse-cmf, #poc-more, #akg-gallery, #poc-process, #spotify-more, #bagheera-more, #mixed-more, #specialized-more, #belmar-more, #design-process'),
									 main_sliders = $('#akg-more, #converse-more, #converse-gallery, #converse-cmf, #poc-more, #akg-gallery, #poc-process, #spotify-more, #bagheera-more, #mixed-more, #specialized-more, #belmar-more, #design-process');

/* menu auto swipe */
$('.go-to-about').on('click',function(){
console.log('ok');	
about_slider.trigger('to.owl.carousel', [0, 500]);
about_slider_mobile.trigger('to.owl.carousel', [0, 500]);
});
$('.go-to-services').on('click',function(){
//console.log('ok');	
about_slider.trigger('to.owl.carousel', [2, 500]);
about_slider_mobile.trigger('to.owl.carousel', [2, 500]);
});

/* change nav clr depending on slide bg */

main_sliders.on('initialized.owl.carousel translated.owl.carousel', function(event) {
	
	let element = jQuery(event.target);
	let idx = event.item.index;
	let element_item = element.find('.owl-item').eq(idx).find('.item');
	let this_view_btn = $(this).closest('#slider-container').find('.view-btn');
	let this_title = $(this).closest('.section-container').find('.title');	
	
	if (element_item.hasClass('light-theme')) {
	  this_view_btn.add(this_title).removeClass('dark-theme').addClass('light-theme');
	}
	else if (element_item.hasClass('dark-theme')) {
		this_view_btn.add(this_title).removeClass('light-theme').addClass('dark-theme');
	}
	else if (element_item.hasClass('medium-theme')) {
		this_view_btn.add(this_title).removeClass('light-theme dark-theme').addClass('medium-theme');
		//$(this).closest('.section-container').find('.title').not('.ignore').removeClass('light-theme dark-theme').addClass('medium-theme');
	}
	else {
	  //alert('error');
	}				  	
});


/* remove slides for screens and devices on initialize  */
all_sliders.on('initialize.owl.carousel', function(event) {
	
var slider_id =  $(this).attr('id');	

	if ($(window).width() < 576) {
	$('#' + slider_id + ' .owl-hide-xs-down').remove();		//att: spacing
	}
	
	if ($(window).width() < 992) {
	$('#' + slider_id + ' .owl-hide-md-down').remove();
	}

	if ($(window).width() > 767) {
	$('#' + slider_id + ' .owl-hide-md-up').remove();
	}
	
	if ($(window).width() > 991) {
	$('#' + slider_id + ' .owl-hide-lg-up').remove();
	}

	if(window.innerHeight > window.innerWidth){
	$('#' + slider_id + ' .owl-hide-portrait').remove();
	}

/* 	if(window.innerHeight > window.innerWidth && $(window).width() > 767){
	alert('ok')
	} */
	
if(is_touch_device()) {
	all_sliders.on('initialize.owl.carousel', function(event) {
		
		var slider_id =  $(this).attr('id');	
		$('#' + slider_id + ' .owl-hide-touch').remove();		//att: spacing
		});	
		}
		else
		{ 
	all_sliders.on('initialize.owl.carousel', function(event) {
		
		var slider_id =  $(this).attr('id');	
		$('#' + slider_id + ' .owl-hide-desktop').remove();		//att: spacing
		});	
		}	
});		
	
/* remove loader when slide is done loading - Owl*/
all_sliders.on('loaded.owl.lazy', function() {

var i_d =  $(this).attr('id');
//$("#" + i_d + " .active div").find(".loader").addClass('hw100');  

    if ($("#" + i_d + " .owl-item").hasClass("active")) {
        $("#" + i_d + " .active div").removeClass("loader");        
    };

/* 	alert(i_d); */	 
});

/* remove loader + add animation when slide is done loading - Verlok - used also for popups */
  $('img.lazy, iframe.lazy').on('load',function(){
	$(this).closest('.loader').removeClass('loader'); 

    if ($(this).hasClass('lazy-fade-in')){
		 
			$(this).addClass('item-animate');
			setTimeout(function(){
				$('body .lazy-fade-in.item-animate').each(function(k){
					var el = $(this);
					setTimeout( function () {
						el.removeClass('invisible');
						el.addClass('fadeIn element-animated');							
						el.removeClass('item-animate');
					},  k * 100);
				});					
			}, 100);			
    }	
});


/* add slider element animations */
$('#about-slider').on('translate.owl.carousel', function(event) {

	var item = event.item.index;     
	$(this).find('.animate').removeClass('fadeIn element-animated');
	$(this).find('.animate').eq(item).addClass('fadeIn element-animated');
	/* console.log(item); */
	});		
$('#hero-slider').on('loaded.owl.lazy', function() {
$(this).find('.p-logo').removeClass('.invisible').addClass('fadeIn element-animated');
$(this).find('.p-logo-new').removeClass('.invisible').addClass('fadeIn element-animated');
});							
 $('#converse-more, #akg-more').on('translated.owl.carousel', function(event) {
	 
	let element = jQuery(event.target);
	let idx = event.item.index;
	element.find('.owl-item').find('.animate').removeClass('invisible pulse element-animated');
	element.find('.owl-item').eq(idx).find('.animate').addClass('pulse element-animated');	 
/* 	console.log(idx); */
});

/* add theme colors to .owl-nav dots & .mfp-close  */
$('#poc-process, #design-process').on('changed.owl.carousel', function(event) {
  var item = event.item.index;     // Position of the current item
  var process_id =  $(this).attr('id') ;
/* alert(process_id); */
    if ($('.owl-item').not('.cloned').eq(item).find('.col-full').hasClass('dark-theme')){
		 
			$('.owl-item').not('.cloned').eq(item).find('.col-full').closest('#' + process_id).find('.owl-nav').removeClass('light-theme' ).addClass('dark-theme' );		
			$('.owl-item').not('.cloned').eq(item).find('.col-full').closest('#' + process_id + '-popup').removeClass('light-theme').addClass('dark-theme' );
			$('.owl-item').not('.cloned').eq(item).find('.col-full').closest('#' + process_id + '-popup').find('.mfp-close').removeClass("contrast-color").addClass("whites-lightest-color");			
/* 			$('.owl-item').not('.cloned').eq(item).find('.col-full').closest('#process-akg').find('.owl-dots .owl-dot.active').addClass('dark-theme' ); */
    } else {
		 
			$('.owl-item').not('.cloned').eq(item).find('.col-full').closest('#' + process_id).find('.owl-nav').removeClass('dark-theme').addClass('light-theme' ); 
			$('.owl-item').not('.cloned').eq(item).find('.col-full').closest('#' + process_id + '-popup').removeClass('dark-theme').addClass('light-theme' );		 		 
			$('.owl-item').not('.cloned').eq(item).find('.col-full').closest('#' + process_id + '-popup').find('.mfp-close').removeClass("whites-lightest-color").addClass("contrast-color");
		 /* alert('light'); */
      }
});
	
/* refresh fix some browsers */
/* $(window).on('orientationchange', function(){	

function refresh_this() {   					
all_sliders.trigger('refresh.owl.carousel');		
poc_more.trigger('refresh.owl.carousel');		

 }
 setTimeout(refresh_this, 100)
});
 */

/* disable dragging for specific slides */
$(".disable-owl-swipe").on("touchstart mousedown", function(e) {
    // Prevent carousel swipe
    e.stopPropagation();
})

/* prev & next buttons */
    $('.prev-btn').on('click',  function () {
		let owl_id = $(this).closest('#slider-container').find('.owl-carousel').attr('id');			
        $('#' + owl_id).trigger('prev.owl.carousel');
		/* console.log(owl_id); */		  
    });	
    $('.more-btn, .more-btn-text').on('click',  function () {
		let owl_id = $(this).closest('#slider-container').find('.owl-carousel').attr('id');			
        $('#' + owl_id).trigger('next.owl.carousel');
		/* console.log(owl_id);	 */	  
    });	

/* mousewheel sliders */
$('#converse-gallery, #akg-gallery').on('mousewheel', '.owl-stage', function (e) {
	
	var 
	mouse_id =  $(this).closest('.owl-carousel').attr('id'),
	grul = $('#' + mouse_id);

	if (e.deltaY>0) {
	  grul.trigger('next.owl');
	} else {
	  grul.trigger('prev.owl');
	}
	e.preventDefault();
});

/* sliders */

hero_slider.owlCarousel({
loop:true,
/* autoplay: true, */
/* autoplayHoverPause: true, */
lazyLoad : true,		
lazyLoadEager: 1,
/* autoplayTimeout: 2500,	 */
//rewind: true,
animateOut: 'fadeOut',
//autoHeight: true,
/* checkVisible: false,	 */
margin:0,
nav:false,
dots:false,
items: 1,
dragTouch: false,
mouseDrag: false,
touchDrag: false,
responsive:{
  0:{
	autoHeight: true,
	items:1,
	nav:true,
	
  },
  768:{
	items:1,
	navText : ["<span class='ion-android-arrow-back'></span>","<span class='ion-android-arrow-forward'></span>"],
	nav:true,
	autoHeight: true,
  },
  992:{
	items:1,
	navText : ["<p class='ion-chevron-left ion-icon-size'></p>","<p class='ion-chevron-right ion-icon-size'></p>"],
	autoHeight: true	
  }	  
}
});
about_slider.owlCarousel({
rewind: true,
autoHeight: true,
/* checkVisible: false,	 */
lazyLoad : true,		
loop:false,
margin:0,
nav:false,
dots:false,
items: 1,
dragTouch: false,
navText : ["<span class='ion-android-arrow-back'></span>","<span class='ion-android-arrow-forward'></span>"],
responsive:{
  0:{
	autoHeight: true,
	loop:false,
	items:1,
	navText : ["<span class='ion-android-arrow-back'></span>","<span class='ion-android-arrow-forward'></span>"],
	nav:false,
	
  },
  768:{
	items:1,
	navText : ["<span class='ion-android-arrow-back'></span>","<span class='ion-android-arrow-forward'></span>"],
	nav:false,
	autoHeight: true,
	dots:true,	
  },
  992:{
	items:1,
	navText : ["<p class='ion-chevron-left ion-icon-size'></p>","<p class='ion-chevron-right ion-icon-size'></p>"],
	nav:false,
	autoHeight: true	
  }	  
}
});

about_slider_mobile.owlCarousel({
rewind: true,
autoHeight: true,
/* checkVisible: false,	 */
lazyLoad : true,		
loop:false,
margin:0,
nav:false,
dots:false,
items: 1,
dragTouch: false,
navText : ["<span class='ion-android-arrow-back'></span>","<span class='ion-android-arrow-forward'></span>"],
responsive:{
  0:{
	autoHeight: true,
	loop:false,
	items:1,
	navText : ["<span class='ion-android-arrow-back'></span>","<span class='ion-android-arrow-forward'></span>"],
	nav:false,
	
  },
  768:{
	items:1,
	navText : ["<span class='ion-android-arrow-back'></span>","<span class='ion-android-arrow-forward'></span>"],
	nav:false,
	autoHeight: true,
	dots:true,	
  },
  992:{
	items:1,
	navText : ["<p class='ion-chevron-left ion-icon-size'></p>","<p class='ion-chevron-right ion-icon-size'></p>"],
	nav:false,
	autoHeight: false	
  }	  
}
});
akg_more.owlCarousel({
loop: false,	
rewind: true,
autoplay: false,
autoHeight: true,
lazyLoad : true,
lazyLoadEager : 1,
margin:0,
stagePadding:0,
nav:false,
items: 1,
touchDrag: true,
mouseDrag: true,
dots:false,
navText : ["<p class='ion-chevron-left ion-icon-size'></p>","<p class='ion-chevron-right ion-icon-size'></p>"],
responsive:{
0:{
  items:1,
  nav:false
},
600:{
  items:1,
  nav:false
},
1000:{
  items:1,
  nav:false,
  autoHeight: true,
}
}	
});	
akg_gallery.owlCarousel({
/* rewind: true, */
autoplay: false,
lazyLoad : true,
lazyLoadEager: 1,
loop: true,
margin:0,
stagePadding:0,
nav:true,
items: 1,
touchDrag: true,
mouseDrag: true,
dots:true,
navText : ["<span class='ion-android-arrow-back'></span>","<span class='ion-android-arrow-forward'></span>"],
 responsive:{
	0:{
	items:1,
	navText : ["<span class='ion-android-arrow-back'></span>","<span class='ion-android-arrow-forward'></span>"],
	nav:false
	},
	600:{
	items:1,
	navText : ["<p class='ion-chevron-left ion-icon-size'></p>","<p class='ion-chevron-right ion-icon-size'></p>"],
	nav:false,
	dots:true,
	},
	1000:{
	loop: true,
	stagePadding:0,
	items:1,
	navText : ["<p class='ion-chevron-left ion-icon-size'></p>","<p class='ion-chevron-right ion-icon-size'></p>"],
	nav:true,
	dots:false
	}	
 }	
});
converse_more.owlCarousel({
rewind: true,
loop: false,	
autoplay: false,
autoHeight: true,
lazyLoad : true,

margin:0,
stagePadding:0,
nav: false,
items: 1,
touchDrag: true,
mouseDrag: true,
dots:false,

navText : ["<p class='ion-chevron-left ion-icon-size'></p>","<p class='ion-chevron-right ion-icon-size'></p>"],
responsive:{
0:{
  items:1
},
600:{
  items:1
},
1000:{
  items:1,
  nav: true,
}
}	
});
converse_gallery.owlCarousel({
/* rewind: true, */
autoplay: false,
autoHeight: false,
lazyLoad : true, 
lazyLoadEager: 1,
loop: true,
margin:0,
stagePadding:0,
nav:true,
items: 1,
touchDrag: true,
mouseDrag: true,
dots:true,
navText : ["<span class='ion-android-arrow-back'></span>","<span class='ion-android-arrow-forward'></span>"],
responsive:{
0:{
  items:1,
  nav:false
},
600:{
items:1,
navText : ["<p class='ion-chevron-left ion-icon-size'></p>","<p class='ion-chevron-right ion-icon-size'></p>"],
nav:true
},
1000:{
items:1,
navText : ["<p class='ion-chevron-left ion-icon-size'></p>","<p class='ion-chevron-right ion-icon-size'></p>"],
nav:true
}
}	
});
converse_cmf.owlCarousel({
animateIn: 'fadeIn',	
animateOut: 'fadeOut',	
autoplay: false,
autoHeight: false,
lazyLoad : true,
margin:0,
stagePadding:0,
nav:false,
items: 1,
touchDrag: true,
mouseDrag: true,
dots:true,
responsive:{
0:{
	items:1,
	navText : ["<span class='ion-android-arrow-back'></span>","<span class='ion-android-arrow-forward'></span>"]
},
600:{
	items:1,
	navText : ["<p class='ion-chevron-left ion-icon-size'></p>","<p class='ion-chevron-right ion-icon-size'></p>"]
},
1000:{
	items:1,
	navText : ["<p class='ion-chevron-left ion-icon-size'></p>","<p class='ion-chevron-right ion-icon-size'></p>"]
}
}	
});
poc_more.owlCarousel({
/* loop:true, */
autoplay: false,
autoHeight: true,
lazyLoad : true,
margin:0,
stagePadding:0,
nav:true,
items: 1,
touchDrag: true,
mouseDrag: true,
dots:true,
navText : ["<p class='ion-chevron-left ion-icon-size'></p>","<p class='ion-chevron-right ion-icon-size'></p>"],
responsive:{
0:{
  items:1,
  nav:false
},
600:{
  items:1,
  nav:false
},
1000:{
  items:1,
  nav:true
}
}	
});
spotify_more.owlCarousel({
rewind: true,
loop: false,	
autoplay: false,
autoHeight: true,
lazyLoad : true,
margin:0,
stagePadding:0,
nav: false,
items: 1,
touchDrag: true,
mouseDrag: true,
dots:false,

navText : ["<p class='ion-chevron-left ion-icon-size'></p>","<p class='ion-chevron-right ion-icon-size'></p>"],
responsive:{
0:{
  items:1
},
600:{
  items:1
},
1000:{
  items:1,
  nav: true,
}
}	
});	
bagheera_more.owlCarousel({
rewind: true,	
autoplay: false,
loop: false,
autoHeight: false,
lazyLoad : true, 
margin:0,
stagePadding:0,
nav:true,
items: 1,
touchDrag: true,
mouseDrag: true,
dots:false,
navText : ["<span class='ion-android-arrow-back'></span>","<span class='ion-android-arrow-forward'></span>"],
responsive:{
0:{
  items:1,
  nav:false
},
600:{
  items:1,
navText : ["<p class='ion-chevron-left ion-icon-size'></p>","<p class='ion-chevron-right ion-icon-size'></p>"],
  nav:false
},
1000:{
  items:1,
navText : ["<p class='ion-chevron-left ion-icon-size'></p>","<p class='ion-chevron-right ion-icon-size'></p>"],
  nav:true,
dots:false,
}
}	
});		
mixed_more.owlCarousel({
rewind: true,
autoplay: false,
autoHeight: true,
lazyLoad : true,
lazyLoadEager: 1, 
margin:0,
stagePadding:0,
nav:false,
items: 1,
touchDrag: true,
mouseDrag: true,
dots:false,
navText : ["<span class='ion-android-arrow-back'></span>","<span class='ion-android-arrow-forward'></span>"],
responsive:{
0:{
  items:1,
  nav:false
},
600:{
  items:1,
navText : ["<p class='ion-chevron-left ion-icon-size'></p>","<p class='ion-chevron-right ion-icon-size'></p>"],
  nav:false
},
1000:{
  items:1,
navText : ["<p class='ion-chevron-left ion-icon-size'></p>","<p class='ion-chevron-right ion-icon-size'></p>"],
  nav:false
}
}	
});
mixed.owlCarousel({
rewind: true,	
autoplay: false,
autoHeight: true,
lazyLoad : true,
margin:0,
stagePadding:0,
nav:true,
items: 1,
touchDrag: true,
mouseDrag: true,
dots:true,
responsive:{
0:{
	items:1,
	navText : ["<span class='ion-android-arrow-back'></span>","<span class='ion-android-arrow-forward'></span>"],
	nav:true
},
600:{
	items:1,
	navText : ["<p class='ion-chevron-left ion-icon-size'></p>","<p class='ion-chevron-right ion-icon-size'></p>"],
	nav:true
},
1000:{
	items:1,
	navText : ["<p class='ion-chevron-left ion-icon-size'></p>","<p class='ion-chevron-right ion-icon-size'></p>"], 
	nav:true
}
}	
});
specialized_more.owlCarousel({
rewind: true,
autoplay: false,
autoHeight: true,
lazyLoad : true, 
margin:0,
stagePadding:0,
nav:false,
items: 1,
touchDrag: true,
mouseDrag: true,
dots:false,
navText : ["<span class='ion-android-arrow-back'></span>","<span class='ion-android-arrow-forward'></span>"],
responsive:{
0:{
  items:1,
  nav:false
},
600:{
  items:1,
navText : ["<p class='ion-chevron-left ion-icon-size'></p>","<p class='ion-chevron-right ion-icon-size'></p>"],
  nav:false
},
1000:{
  items:1,
navText : ["<p class='ion-chevron-left ion-icon-size'></p>","<p class='ion-chevron-right ion-icon-size'></p>"],
  nav:false
}
}	
}); 
belmar_more.owlCarousel({
rewind: true,
autoplay: false,
autoHeight: false,
lazyLoad : true,
margin:0,
stagePadding:0,
nav:false,
items: 1,
touchDrag: true,
mouseDrag: true,
dots:false,
responsive:{
0:{
	items:1,
	navText : ["<span class='ion-android-arrow-back'></span>","<span class='ion-android-arrow-forward'></span>"]
},
600:{
	items:1,
	navText : ["<p class='ion-chevron-left ion-icon-size'></p>","<p class='ion-chevron-right ion-icon-size'></p>"]
},
1000:{
	items:1,
	navText : ["<p class='ion-chevron-left ion-icon-size'></p>","<p class='ion-chevron-right ion-icon-size'></p>"]
}
}	
});
design_process.owlCarousel({
autoplay: false,
rewind: true,
autoHeight: true,
lazyLoad : true,
lazyLoadEager: 1,
margin:0,
stagePadding:0,
nav:true,
items: 1,
touchDrag: true,
mouseDrag: true,
dots:false,
navText : ["<p class='ion-chevron-left ion-icon-size'></p>","<p class='ion-chevron-right ion-icon-size'></p>"],
responsive:{
0:{
  items:1,
  nav:false
},
600:{
  items:1,
  nav:false
},
1000:{
  items:1,
  nav:true
}
}	
});	 
	
reviews.owlCarousel({
autoplay: true,
autoplayHoverPause: true,
loop: true,
autoplayTimeout: 1700,	
margin:0,
stagePadding:0,
nav:false,
items: 1,
touchDrag: true,
mouseDrag: true,
dots:false,
navText : ["<p class='ion-chevron-left ion-icon-size'></p>","<p class='ion-chevron-right ion-icon-size'></p>"],
responsive:{
0:{
  items:1,
  nav:false
},
600:{
  items:2,
  nav:false
},
1000:{
  items:3,
  nav:false
},
1200:{
  items:4,
  nav:false
}
}	
});	 
	
	
  var slideImage = function() {
    $(".slide-image").each(function () {
      var bg = $(this).data("bg");
      var pos = $(this).data("kenburn-start");

      $(this).css({
        "background-image": "url(" + bg + ")",
        "transform-origin": pos
      });
    });
  };
  slideImage();
  
  var lazyLoadInstance = new LazyLoad({
  // Your custom settings go here
}); 


/* owl unload */

	/* set default value */		
	var lastSlide = 0;

main_sliders.on('changed.owl.carousel', function(event) {
		
	/* get current slide index */
	let element = jQuery(event.target);		 
	var thisSlide = event.item.index;
	console.log('current slide is: ' + thisSlide);
	console.log('last slide is: ' + lastSlide);

	/* if last visited slide has class unload and  lazy loading is finished - unload it by moving src to data-src + add class .unloaded  */
	var oldslide = element.find('.owl-item').eq(lastSlide).find('.unload');
	var lazy_status = oldslide.attr('data-ll-status');
	if (lazy_status == 'loaded')
	{
	var oldsrc = oldslide.attr('src');
	
	oldslide.attr('src','').attr('data-src', oldsrc).removeClass('hidden').addClass('unloaded');	
	}	
	
	
	/* if last visited slide has class .unload-no-reload, unload by moving src to data-src */
	var oldslide2 = element.find('.owl-item').eq(lastSlide).find('.unload-no-reload');	
	var oldsrc2 = oldslide2.attr('src');	
	if (oldsrc2 !== '') // must have time to load src
	{	
	oldslide2.attr('src','').attr('data-src', oldsrc2).addClass('unloaded');
	}	

	/* if this slide with class .unload has been unloaded before - reload by moving data-src to src  */ 
	var this_unload_slide = element.find('.owl-item').eq(thisSlide).find('.unload');
	var getdatasrc = this_unload_slide.attr('data-src');	
	
	if (element.find('.owl-item').eq(thisSlide).find('.unload').hasClass('unloaded')) {
	this_unload_slide.attr('src', getdatasrc).removeClass('unloaded');
	console.log('this has class .unloaded');
	}

	//remove class hidden from overlay
	if (element.find('.owl-item').eq(thisSlide).find('.unload-no-reload').hasClass('unloaded')) {
	element.find('.owl-item').eq(thisSlide).find('.unload-no-reload').closest('.iframe-container').find(".hide-this").removeClass('hidden');
	}

   if (thisSlide > lastSlide){
       console.log('going right');
   } else {
      console.log('going left');
   }
	
	//
   lastSlide = thisSlide;



});


})(jQuery);