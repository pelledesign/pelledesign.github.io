			var thisSlide = $(slider.slides[slider.track.details.rel]);
			var upcomingSlideIndex = slider.animator.targetIdx;	
			//var thisSlideIndex = slider.track.details.rel;
			//console.log('going to: ',upcomingSlideIndex, 'last slide was: ',lastIndex);
			var lastSlide = $(slider.slides[lastIndex]);
			//console.log('last slide was: ',lastSlide);
			
			if (lastSlide.find('iframe').hasClass('unload')) {
			//console.log('last slide got iframe');		
			var thisSrc = lastSlide.find('iframe').attr('src');
			//console.log('last slide has class unload and its src is: ', thisSrc);
			lastSlide.find('iframe').attr('src','').attr('data-src', thisSrc).removeClass('unload').addClass('unloaded');
			var lastDataSrc = lastSlide.find('iframe').attr('data-src');
			console.log('keen-unloaded: ', lastDataSrc);			
			}
			else {		
			//console.log('last slide got no iframe');
			}
			lastIndex = upcomingSlideIndex;

			if (lastSlide.find('iframe').hasClass('showonclick-loaded')) {
			
			$(this).closest('.iframe-container').find(".hide-this").removeClass('hidden');			
			}
			
			if (thisSlide.find('iframe').hasClass('unloaded')) {
			//console.log(thisSlide);			
			var dataSrc = thisSlide.find('iframe').attr('data-src');
			console.log(dataSrc);
			thisSlide.find('iframe').attr('src',dataSrc).removeClass('unloaded').addClass('unload');	
			console.log('keen-reloaded: ',thisSlide.find('iframe').attr('src'));	
			}	