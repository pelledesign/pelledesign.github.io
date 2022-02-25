
	$(function(){	   
		$(".p-logo-new").load("images/icons/p-logo-new.svg");
		$(".text-logo-svg").load("images/icons/text-logo.svg"); 
		$(".thecuts").load("images/icons/thecuts.svg");
		$(".thecuts2").load("images/icons/thecuts2.svg").addClass('loaded');
		//$(".next-play-circle").load("images/icons/next_play_circle.svg");
		$(".arrow").load("images/icons/arrow.svg"); 			
		$(".sliderarrow").load("images/icons/sliderarrow.svg"); 			
		//$(".zoom-icon").load("images/icons/zoom-icon.svg"); 		
		$(".akg-logo").load("akg/images/akg-logo.svg"); 			
		$(".converse-logo").load("Converse/images/converse-logo.svg"); 						
		$(".bagheera-logo").load("Bagheera/images/bagheera-logo.svg"); 						
		$(".poc-logo").load("poc/images/poc-logo.svg"); 
		$(".spotify-logo").load("spotify/images/spotify-logo.svg"); 				
		$(".specialized-logo").load("Specialized/images/specialized-logo.svg"); 				
		$(".haglofs-logo").load("haglofs/images/haglofs-logo.svg"); 				
		$(".alcon-logo").load("alcon/images/alcon-logo.svg"); 						
		$(".p-logo").load("images/icons/p-logo.svg");		
		$(".cog-logo").load("images/icons/cog.svg"); 					
		$(".arrow-rotate-right").load("images/icons/rotate_right_black.svg"); 				
		$(".arrow-rotate-left").load("images/icons/rotate_left_black.svg"); 				
		$(".color-circle").load("images/icons/color_circle.svg"); 				
		$(".converse-process-05").load("Converse/images/process/modeling01.svg"); 							
		$(".bulb-icon").load("images/process/bulb.svg"); 					
		$(".scroll-down").load("images/icons/scrolldown.svg"); 					
		$(".akg-functions1").load("akg/images/functions.svg"); 					
		$(".akg-functions2").load("akg/images/functions2.svg"); 					
		$(".next-circle").load("images/icons/next_circle.svg"); 
		  
	});

	$(".svg-lazy").each(function() {  
		var el = $(this); 
		el.on('load', function() {
		var svgUrl = el.attr('data-svg');
		console.log(svgUrl);
		el.closest('div').load(svgUrl); 		  
	});
	});

/* 	$(".svg-lazy").on('load', function() {  
		var el = $(this); 
		var svgUrl = el.attr('data-svg');
		console.log(svgUrl);
		el.closest('.slide').load(svgUrl); 		  
	}); */
		

				