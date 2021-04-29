function delay() {

    if (window.location.hash) {
        setTimeout(function () {
            var hash = window.location.hash;
            window.location.hash = "";
      $('html').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
        }, 300);
    }
};	  

function start()
{
delay();
}

 window.onload = start;  