/* var nunumR;$(document).ready((function(){$(".sec").html("Active slide: 1"),$("section:nth-child(1)").addClass("active"),$("li:nth-child(1)").addClass("active")})),$(".snap-container").scroll((function(){$(".text").html("ScrollTop: "+$(".snap-container").scrollTop()),nunum=$(".snap-container").scrollTop()/$(".snap-container").height()+1,nunumR=nunum.toString().split("."),$("section").removeClass("active"),$("section:nth-child("+nunumR[0]+")").addClass("active"),$(".sec").html("Active slide: "+nunumR[0]),clearTimeout($.data(this,"scrollTimer")),$.data(this,"scrollTimer",setTimeout((function(){$("li").removeClass("active"),$("li:nth-child("+nunumR[0]+")").addClass("active")}),150))})),$(window).resize((function(){clearTimeout($.data(this,"resizelTimer")),$.data(this,"resizelTimer",setTimeout((function(){$(".snap-container").animate({scrollTop:0},500)}),150))})),$(".count").html("Slides: "+$(".snap-container section").length),$("li").click((function(){console.log($(this).attr("data-slide-link")*$("section").height()),$(".snap-container").animate({scrollTop:$(this).attr("data-slide-link")*$("section").height()+120},1500)}));
 */
 
 var nunumR;
$(document).ready((function() {
	$(".sec").html("Active slide: 1"), $("section:nth-child(1)").addClass("active"), $("li:nth-child(1)").addClass("active")
})), $(".snap-container").scroll((function() {
	$(".text").html("ScrollTop: " + $(".snap-container").scrollTop()), nunum = $(".snap-container").scrollTop() / $(".snap-container").height() + 1, nunumR = nunum.toString().split("."), $("section").removeClass("active"), $("section:nth-child(" + nunumR[0] + ")").addClass("active"), $(".sec").html("Active slide: " + nunumR[0]), clearTimeout($.data(this, "scrollTimer")), $.data(this, "scrollTimer", setTimeout((function() {
		$("li").removeClass("active"), $("li:nth-child(" + nunumR[0] + ")").addClass("active")
	}), 150))
})), $(window).resize((function() {
	clearTimeout($.data(this, "resizelTimer")), $.data(this, "resizelTimer", setTimeout((function() {
		$(".snap-container").animate({
			scrollTop: 0
		}, 500)
	}), 150))
})), $(".count").html("Slides: " + $(".snap-container section").length), $("li").click((function() {
	console.log($(this).attr("data-slide-link") * $("section").height()), $(".snap-container").animate({
		scrollTop: $(this).attr("data-slide-link") * $("section").height() + 120
	}, 1500)
}));