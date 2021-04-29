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
	
$('nav .dropdown').hover(function(){
	var $this = $(this);
	$this.addClass('show');
	$this.find('> a').attr('aria-expanded', true);
	$this.find('.dropdown-menu').addClass('show');
}, function(){
	var $this = $(this);
		$this.removeClass('show');
		$this.find('> a').attr('aria-expanded', false);
		$this.find('.dropdown-menu').removeClass('show');
});

$('.navbar .dropdown > a').click(function(){
 location.href = this.href;
});

$('#dropdown04').on('show.bs.drop	down', function () {
  console.log('show');
});


/* hide expanded menu on body and header links click*/
$('body').on('click', ":not(header, header *)", function(){
	$('.navbar-collapse').removeClass('show');
});

$('header a.nav-link').on('click',  function(){
	$('.navbar-collapse').removeClass('show');
});

/* $('header .nav-link').on('click', function(){
	$('.navbar-collapse').removeClass('show');
}); */


$('.navbar .dropdown > a').click(function(){
 location.href = this.href;
});



/* zoom-icon function */
$('.zoom-icon').on('click', function() {
	
	if ($(this).next('img').closest('div').hasClass('dark-theme')){
	var bg = '#141414'; 
	}
	else if ($(this).next('img').closest('div').hasClass('light-theme')){
	var bg = '#fff'; 
	}
	else if ($(this).next('img').closest('div').hasClass('medium-theme')){
	var bg = '#d4d5d7'; 
	}
	else {
	var bg = '#fff'; 
	};
		
	if(window.innerHeight > window.innerWidth){
		 var bgsize = 'cover';
	}	 
	else {
	var bgsize = 'contain' 
	};
	

    var src = $(this).closest('.zoom-container').find('img').first().attr("src");
    var modal;
	 var scrollwidth = '99vh'
    function removeModal(){ modal.remove(); $('body').off('keyup.modal-close'); }
    modal = $('<div id="scroll"><div style="width: 200vw; height: 100vh; margin-left:auto; margin-right: auto; background: url(' + src +') center center / contain no-repeat;"></div></div>').css({
		  backgroundColor: bg,
		  backgroundSize: bgsize,
        width:'100%', 
		  height:'100%',
        position:'fixed',
        zIndex:'10000',
        top:'0', left:'0',
        cursor: 'zoom-out',
		  overflowX: 'scroll'
    }).click(function(){
        removeModal();
    }).appendTo('body');

	var imglength = $(this).next('img').width();	
	var $container = $("#scroll");
	var $img = $("#scroll div");
	var cWidth = $container.width();
	var iWidth = $img.width();
	var left = (iWidth - cWidth) / 2; 
      
	$container.scrollLeft(left);

    $('body').on('keyup.modal-close', function(e){
      if(e.key==='Escape'){ removeModal(); } 
    });	
});

var
about_slider  = $('#about-slider'),
converse_more  = $('#converse-more'),
converse_gallery  = $('#converse-gallery'),
converse_cmf  = $('#converse-cmf'),
akg_more  = $('#akg-more'),
akg_more3  = $('#akg-more3'),
akg_gallery  = $('#akg-gallery'),
poc_process  = $('#poc-process'),
spotify_process  = $('#spotify-process'),
bagheera_more  = $('#bagheera-more'),
mixed_more  = $('#mixed-more'),
mixed  = $('#mixed'),
specialized_more  = $('#specialized-more'),
belmar_more  = $('#belmar-more'),
design_process  = $('#design-process'),
all_sliders = $('#about-slider, #converse-more, #converse-gallery, #converse-cmf, #akg-more, #akg-more3, #akg-gallery, #poc-process, #spotify-process, #bagheera-more, #mixed-more, #specialized-more, #belmar-more, #design-process');


/* remove slides for screens and devices on initialize  */
all_sliders.on('initialize.owl.carousel', function(event) {
	
var slider_id =  $(this).attr('id');	

	if ($(window).width() < 576) {
	$('#' + slider_id + ' .owl-hide-xs-down').remove();		//att: spacing
	}
	
	if ($(window).width() < 992) {
	$('#' + slider_id + ' .owl-hide-medium-down').remove();
	}

	if ($(window).width() > 767) {
	$('#' + slider_id + ' .owl-hide-medium-up').remove();
	}
	
	if ($(window).width() > 991) {
	$('#' + slider_id + ' .owl-hide-large-up').remove();
	}

	if(window.innerHeight > window.innerWidth){
	$('#' + slider_id + ' .owl-hide-portrait').remove();
	}
	
if(is_touch_device()) {
	all_sliders.on('initialize.owl.carousel', function(event) {
		
		var slider_id =  $(this).attr('id');	
		$('#' + slider_id + ' .owl-hide-touch').remove();		//att: spacing
		});	
		}
		else
		{ 
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

/* remove loader + add animation when slide is done loading - Verlok*/
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
/* 							 el.closest("div").removeClass('loader'); */
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
	
 $('#converse-more, #akg-more, #akg-more3').on('translated.owl.carousel', function(event) {
	 
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
$(window).on('orientationchange', function(){	

function refresh_this() {   					
bagheera_process.trigger('refresh.owl.carousel');		
poc_process.trigger('refresh.owl.carousel');		

 }
 setTimeout(refresh_this, 100)
});

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
    $('.more-btn').on('click',  function () {
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
about_slider.owlCarousel({
rewind: true,
autoHeight: true,
/* checkVisible: false,	 */
lazyLoad : true,		
loop:false,
margin:0,
nav:true,
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
	nav:true,
	autoHeight: false	
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
autoplay: false,
autoHeight: false,
lazyLoad : true, 
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
akg_more.owlCarousel({
loop: false,	
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
akg_more3.owlCarousel({
loop: false,	
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
  nav:true,
  autoHeight: true,
}
}	
});	
akg_gallery.owlCarousel({

autoplay: false,
lazyLoad : true,
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
poc_process.owlCarousel({
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
spotify_process.owlCarousel({
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

all_sliders.on('changed.owl.carousel', function(event) {
		
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
	
	//
   lastSlide = thisSlide;

/*    if (thisSlide > lastSlide){
       console.log('right');
   } else {
      console.log('left');
   } */

});


})(jQuery);