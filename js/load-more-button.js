$( document ).ready(function () {
  $(".moreBox").slice(0, 0).show();								//slice(a, b ) where b is the number of items to be shown from the start
    if ($(".blogBox:hidden").length != 0) {
      $("#loadMore").show();
    }   
    $("#loadMore").on('click', function (e) {
      e.preventDefault();
      $(".moreBox:hidden").slice(0, 1).slideDown(); 		//slice(x, y ) where y is the number of items to be unhidden
      if ($(".moreBox:hidden").length == 0) {
        $("#loadMore").fadeOut('slow');
      }
    });
  });

$( document ).ready(function () {
  $(".moreBox2").slice(0, 0).show();								//slice(a, b ) where b is the number of items to be shown from the start
    if ($(".blogBox2:hidden").length != 0) {
      $("#loadMore2").show();
    }   
    $("#loadMoreText").on('click', function (e) {
      e.preventDefault();
      $(".moreBox2:hidden").slice(0, 1).slideDown(); 		//slice(x, y ) where y is the number of items to be unhidden
      if ($(".moreBox2:hidden").length == 0) {
			$("#loadMoreText").fadeOut('slow');
			//$("#loadMoreText p").text('Less');
			//$("#loadMoreText").addClass('ss');
      }
    }); 

  });