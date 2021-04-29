			<script>	
	$('.open-popup-link, .open-popup-link-process').magnificPopup({

		type:'inline',
		fixedContentPos: true, <!-- leave on true -->
		fixedBgPos: true,	 <!-- leave on true --> 
		callbacks: {
		resize: function() {				
			window.setTimeout(function() {			
			var magnificPopup = $.magnificPopup.instance; 
			magnificPopup.close(); 
		}, 100), 
			window.setTimeout(function() {	
			
			var el = $('#akg-gallery-popup');
			$.magnificPopup.open({
			  items: {
					src: el
			  },
			  type: 'inline'
			});
		}, 200)
		},	
		beforeOpen: function() {		
			$('html, body').addClass('mfp-active');
		},
		beforeClose: function() {
			$('html, body').removeClass('mfp-active');	
		}
	}	  
	});	
	</script>	
	
	
	
	
			<script>	
	$('.open-popup-link, .open-popup-link-process').magnificPopup({

		type:'inline',
		fixedContentPos: "auto", <!-- leave on true -->
		fixedBgPos: "auto",	  
		callbacks: {
		resize: function() {		

		},		
		beforeOpen: function() {		
			$('html, body').addClass('mfp-active');
		},
		beforeClose: function() {
			$('html, body').removeClass('mfp-active');	
		}
	}	  
	});	
	</script>	
	
	
	
				<script>	
	$('.open-popup-link, .open-popup-link-process').magnificPopup({

		type:'inline',
		fixedContentPos: true, <!-- leave on true -->
		fixedBgPos: true,	 <!-- leave on true --> 
		callbacks: {
		resize: function foo() {
	
		var closeVar;
		var openVar;
		var clearVar;
		
		function delayedClose() {
		  closeVar = setTimeout(closePopup, 500);
		}
		function delayedOpen() {
		  openVar = setTimeout(openPopup, 1000);
		}
		function clearfunc() {
		  clearVar = setTimeout(clearVars, 2000);
		}		
		function closePopup() {
		var magnificPopup = $.magnificPopup.instance; 
		magnificPopup.close(); 
	clearTimeout(closeVar);		
		  //alert("closed!");
		}
		function openPopup() {
			var el = $('#akg-gallery-popup');
			$.magnificPopup.open({
			  items: {
					src: el
			  },
			  type: 'inline'
			});	
			clearTimeout(openVar);
		  //alert("Opened!");
		}
	function clearVars() {
	  clearTimeout(openVar);
	  clearTimeout(closeVar);
	  clearTimeout(clearVar);
	}		
		delayedClose();
		delayedOpen();
		//clearfunc();
		
		//clearTimeout(closeVar);
		//clearTimeout(openVar);
		//clearVars();
},
		beforeOpen: function() {		
			$('html, body').addClass('mfp-active');
		},
		beforeClose: function() {
			$('html, body').removeClass('mfp-active');	
		}
	}	  
	});	
	</script>
	
				<script>	
	$('.open-popup-link, .open-popup-link-process').magnificPopup({

		type:'inline',
		fixedContentPos: true, <!-- leave on true -->
		fixedBgPos: true,	 <!-- leave on true --> 
		callbacks: {
		resize: function foo() {

		function sleep(milliseconds) {
		  const date = Date.now();
		  let currentDate = null;
		  do {
			 currentDate = Date.now();
		  } while (currentDate - date < milliseconds);
		}	

		function closePopup() {
		var magnificPopup = $.magnificPopup.instance; 
		magnificPopup.close(); 	
		  alert("closed!");
		}
		function openPopup() {
			var el = $('#akg-gallery-popup');
			$.magnificPopup.open({
			  items: {
					src: el
			  },
			  type: 'inline'
			});	
		}
sleep(1000);
alert('sss');
closePopup();
sleep(1000);
openPopup();
},
		beforeOpen: function() {		
			$('html, body').addClass('mfp-active');
		},
		beforeClose: function() {
			$('html, body').removeClass('mfp-active');	
		}
	}	  
	});	
	</script>	
	
				<script>	
	$('.open-popup-link, .open-popup-link-process').magnificPopup({

		type:'inline',
		fixedContentPos: true, <!-- leave on true -->
		fixedBgPos: true,	 <!-- leave on true --> 
		callbacks: {
		beforeOpen: function() {		
			$('html, body').addClass('mfp-active');
		},
		beforeClose: function() {
			$('html, body').removeClass('mfp-active');	
		},
		resize: foo
	}	  
	});	
	
function foo() {
			var el = $('#akg-gallery-popup');
			$.magnificPopup.open({
			  items: {
					src: el
			  },
			  type: 'inline',
		callbacks: {
		beforeOpen: function() {		
			$('html, body').addClass('mfp-active');
		},
		beforeClose: function() {
			$('html, body').removeClass('mfp-active');	
		},
		resize: foo
	}				  
			});	

alert('resized');
}			
	</script>	
	
	
	
	
	<script>



	$('.open-popup-link, .open-popup-link-process').magnificPopup({
		type:'inline',
		fixedContentPos: true,
		fixedBgPos: true,
		callbacks: {
		  open: function() {			 
			 let	 popup_status = 'open';
			 alert(popup_status);
		  },
		close: function() {
			let popup_status = 'closed';
			alert(popup_status);
		}		  
		}		
	});

if (popup_status == 'open') {
	$(window).on('orientationchange', function(){
		let closeVar,
		openVar,
		magnificPopup = $.magnificPopup.instance,
		cur = magnificPopup.contentContainer,	
		cur_firstchild = cur.children().first(),
		popup_id = '#' + cur_firstchild.attr('id'); 
		alert(popup_id);		

		function delayedClose() {
			closeVar = setTimeout(closePopup, 0);
		}
		function delayedOpen() {
			openVar = setTimeout(openPopup, 0);
		}
		function closePopup() {
			magnificPopup.close(); 
			let popup_status = 'closed';
		}		
		function openPopup() {
			$.magnificPopup.open({
				items: {
				src: popup_id
				},
				type: 'inline',
				fixedContentPos: true,
				fixedBgPos: true,
				callbacks: {
				  open: function() {			 
					 let popup_status = 'open';
					 alert(popup_status);
				  },
				close: function() {
					let popup_status = 'closed';
					alert(popup_status);
				}		  
				}					
			});
		}		
		delayedClose();
		delayedOpen();
	});	

}	
	

</script>


<script>
	$('.open-popup-link, .open-popup-link-process').magnificPopup({
	
		type:'inline',
		fixedContentPos: true,
		fixedBgPos: true,
		callbacks: {
		  open: function() {
			window.status = 'open';
			alert(status);
			tennis();
		  },
		  close: function() {
			window.status = 'closed'	;
			alert(status);
			popup_id = '#undefined';
			
		  }		  
		}		
	});

function checkstatus() {
			 alert(status);
		  }

function tennis() {
		let closeVar,
		openVar,
		magnificPopup = $.magnificPopup.instance,
		cur = magnificPopup.contentContainer,	
		cur_firstchild = cur.children().first(),
		popup_id = '#' + cur_firstchild.attr('id'); 
		alert(popup_id);
		
if (popup_id != '#undefined') {	
	$(window).on('orientationchange', function(){

		alert(popup_id);		

		function delayedClose() {
			closeVar = setTimeout(closePopup, 200);
		}
		function delayedOpen() {
			openVar = setTimeout(openPopup, 400);
		}
		function closePopup() {
			magnificPopup.close(); 
			
		}		
		function openPopup() {
			$.magnificPopup.open({
				items: {
				src: popup_id
				},
				type: 'inline',
				fixedContentPos: true,
				fixedBgPos: true,
				callbacks: {
				  open: function() {
					window.status = 'open';
					alert(status);
				  },
				  close: function() {
					alert(status);
				  }		  
				}				
			});
		}		
		delayedClose();
		delayedOpen();
		
	});	
}
}
//	}
</script>

	<script>
	$('.open-popup-link, .open-popup-link-process').magnificPopup({	
		type:'inline',
		fixedContentPos: true,
		fixedBgPos: true,
		callbacks: {
		  open: function() {
		  }	  
		}		
	});
	
	$(window).on('orientationchange', function(){
		let closeVar,
		openVar,
		magnificPopup = $.magnificPopup.instance,
		cur = magnificPopup.contentContainer,	
		cur_firstchild = cur.children().first(),
		popup_id = '#' + cur_firstchild.attr('id'); 	
		//alert(popup_id);


		function delayedClose() {
			closeVar = setTimeout(closePopup, 0);
		}
		function delayedOpen() {
			openVar = setTimeout(openPopup, 0);
		}
		function closePopup() {
			magnificPopup.close(); 
		}		
		function openPopup() {
			$.magnificPopup.open({
				items: {
				src: popup_id
				},
				type: 'inline',
				fixedContentPos: true,
				fixedBgPos: true,			
			});
		}		
		delayedClose();
		delayedOpen();
	});	
</script>


<script>
	let magnificPopupExists = false;

	$('.open-popup-link, .open-popup-link-process').magnificPopup({	
		type:'inline',
		fixedContentPos: true,
		fixedBgPos: true,
		callbacks: {
			open: function() {
				magnificPopupExists = true;
			},
			close: function() {
				magnificPopupExists = false;
			}
		}		
	});

	$(window).on('orientationchange', function(){
		let closeVar,
		openVar,
		magnificPopup = $.magnificPopup.instance,
		cur = magnificPopup.contentContainer,	
		cur_firstchild = cur.children().first(),
		popup_id = '#' + cur_firstchild.attr('id'); 	

		function delayedClose() {
			closeVar = setTimeout(closePopup, 0);
		}
		function delayedOpen() {
			openVar = setTimeout(openPopup, 0);
		}
		function closePopup() {
			magnificPopup.close(); 
		}		
		function openPopup() {
			$.magnificPopup.open({
				items: {
					src: popup_id
				},
				type: 'inline',
				fixedContentPos: true,
				fixedBgPos: true,		
		callbacks: {
			open: function() {
				magnificPopupExists = true;
			},
			close: function() {
				magnificPopupExists = false;
			}
		}						
			});
		}
		
		if(magnificPopupExists === true) {
			delayedClose();
			delayedOpen();
		}
	});	
</script>